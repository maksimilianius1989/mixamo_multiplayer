﻿using System;
using System.Collections;
using SocketIO;
using UnityEngine;
using GSE = GameSocket.GameSocketEvents;

namespace GameSocket
{
	public class NetworkManager : MonoBehaviour
	{
		public static NetworkManager instance;

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
			string data = JsonUtility.ToJson(ps);

			socket.Emit(GSE.CLIENT_INIT, new JSONObject(data));
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
		public class PlayerJSON
		{
			public string UID;
			public string name;
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
