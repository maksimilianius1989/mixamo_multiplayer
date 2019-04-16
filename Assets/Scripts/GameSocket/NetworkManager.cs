using System;
using System.Collections;
using System.Runtime.InteropServices;
using Controllers;
using SocketIO;
using UnityEngine;
using GSE = GameSocket.GameSocketEvents;

namespace GameSocket
{
	public class NetworkManager : MonoBehaviour
	{
		public static NetworkManager instance;

		private PlayerController PC;
		private AllRoads AR;
		private SocketIOComponent socket;

		void Awake()
		{
			if (instance == null)
				instance = this;
			else if (instance != this)
				Destroy(gameObject);

			DontDestroyOnLoad(gameObject);
		}

		private void Start()
		{
			socket = GameObject.Find("SocketIO").GetComponent<SocketIOComponent>();
			PC = GameObject.Find("Player").GetComponent<PlayerController>();
			AR = GameObject.Find("AllRoads").GetComponent<AllRoads>();

			socket.On(GSE.CONNECT, socket =>
			{
				JoinServer();

				print("Reconnect server 2");
			});
		}

		public void JoinServer()
		{
			StartCoroutine(ConnectToServer());
		}

		#region Commands

		IEnumerator ConnectToServer()
		{
			yield return new WaitForSeconds(0.5f);

			PlayerJSON ps = new PlayerJSON();
			ps.UID = "1";
			ps.name = "Vasy";
			ps.position = new PositionJSON(PC.transform.position);
			ps.rotation = new RotationJSON(PC.transform.rotation);
			string data = JsonUtility.ToJson(ps);

			socket.Emit(GSE.PLAYER_INIT, new JSONObject(data));
		}

		public void CommandNewRoadInit()
		{
			var road = AR.allRoads[0].gameObject;
			var roadRoom = road.GetComponent<RoadRoom>();
			// get points for start game
			var startPoints = roadRoom.startPoints;
			Vector3[] pointsPosition = new Vector3[startPoints.Length];
			for (int i = 0; i < startPoints.Length; i++)
			{
				pointsPosition[i] = startPoints[i].transform.position;
			}

			var newRoadStr = JsonUtility.ToJson(new NewRoadInit(road.name, pointsPosition, roadRoom.startTime));
			socket.Emit(GSE.NEW_ROAD_INIT, new JSONObject(newRoadStr));
		}

		public void CommandMove(Vector3 position)
		{
			socket.Emit(GSE.PLAYER_MOVE, new JSONObject(JsonUtility.ToJson(new PositionJSON(position))));
		}

		public void CommandRotate(Quaternion quaternion)
		{
			socket.Emit(GSE.PLAYER_ROTATE, new JSONObject(JsonUtility.ToJson(new RotationJSON(quaternion))));
		}

		#endregion

		#region JSONMessageClasses

		[Serializable]
		public class NewRoadInit
		{
			public string name;
			public Vector3[] startPoints;
			public int startAt;

			public NewRoadInit(string name, Vector3[] startPoints, int startAt)
			{
				this.name = name;
				this.startPoints = startPoints;
				this.startAt = startAt;
			}
		}

		[Serializable]
		public class PlayerJSON
		{
			public string UID;
			public string name;
			public PositionJSON position;
			public RotationJSON rotation;
		}

		[Serializable]
		public class PositionJSON
		{
			public string[] position;

			public PositionJSON(Vector3 _position)
			{
				position = new string[]
				{
					_position.x.ToString(),
					_position.y.ToString(),
					_position.z.ToString()
				};
			}
		}

		[Serializable]
		public class RotationJSON
		{
			public string[] rotation;

			public RotationJSON(Quaternion _rotation)
			{
				rotation = new string[]
				{
					_rotation.x.ToString(),
					_rotation.y.ToString(),
					_rotation.z.ToString()
				};
			}
		}

		#endregion
	}
}
