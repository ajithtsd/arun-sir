var APP_DATA = {
  "scenes": [
    {
      "id": "0-view1",
      "name": "view1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.2218409668976946,
        "pitch": 0.06467146897368714,
        "fov": 0.7633336152438248
      },
      "linkHotspots": [
        {
          "yaw": -0.4594676577795269,
          "pitch": 0.5678516649147838,
          "rotation": 1.5707963267948966,
          "target": "1-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view2",
      "name": "view2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.01550515432195354,
        "pitch": 0.1497887931293178,
        "fov": 1.0406295977779028
      },
      "linkHotspots": [
        {
          "yaw": -0.9470653880750746,
          "pitch": 0.5454570102286507,
          "rotation": 5.497787143782138,
          "target": "0-view1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "arun sir",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
