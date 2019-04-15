using GameSocket;
using UnityEngine;

namespace Controllers
{
	public class PlayerController : MonoBehaviour
	{
		const string HORIZONTAL_AXIS = "Horizontal";
		const string VERTICAL_AXIS = "Vertical";

		public bool isLocalPlayer;

		private Vector3 oldPosition;
		private Vector3 currentPosition;
		private Quaternion oldRotation;
		private Quaternion currentRotation;

		void Start ()
		{
			oldPosition = transform.position;
			currentPosition = oldPosition;
			oldRotation = transform.rotation;
			currentRotation = oldRotation;
		}

		void Update ()
		{
			if (!isLocalPlayer)
				return;

			var x = Input.GetAxis(HORIZONTAL_AXIS) * Time.deltaTime * 150.0f;
			var z = Input.GetAxis(VERTICAL_AXIS) * Time.deltaTime * 3.0f;

			transform.Rotate(0, x, 0);
			transform.Translate(0, 0, z);

			currentPosition = transform.position;
			currentRotation = transform.rotation;

			if (currentPosition != oldPosition)
			{
				NetworkManager.instance.GetComponent<NetworkManager>().CommandMove(currentPosition);
				oldPosition = currentPosition;
			}

			if (currentRotation != oldRotation)
			{
				NetworkManager.instance.GetComponent<NetworkManager>().CommandRotate(currentRotation);
				oldRotation = currentRotation;
			}
		}
	}
}
