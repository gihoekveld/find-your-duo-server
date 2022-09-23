# eSports API

This is a simple API for eSports data. It is currently in development and is not ready for production use.
Base API url: `http://localhost:3333`

## Entities

### Game

A game is a online game that is played competitively. 

| Property  | Type   | Description                               |
| :-------- | :----- | ----------------------------------------- |
| id        | String | The unique identifier for the game.       |
| title     | String | The title of the game.                    |
| bannerUrl | String | The URL to the banner image for the game. |

### Ad

An ad is an ad from a user who wants to find a duo to play together. In this ad, the user puts the name of the game, time and days when he usually plays, how long he has been playing, what his discord is, if he usually makes voice calls and etc.

| Property         | Type    | Description                                |
| :--------------- | :------ | ------------------------------------------ |
| id               | String  | The unique identifier for the ad.          |
| gameId           | String  | The game identifier that the ad is for.    |
| name             | String  | Ad owner gamer name.                       |
| yearsPlaying     | String  | How long the gamer has been playing.       |
| discord          | String  | Ad owner gamer discord.                    |
| weekDays         | Array   | Days when the gamer usually plays.         |
| hourStart        | String  | Hour when the gamer usually starts playing.|
| hourEnd          | String  | Hour when the gamer usually ends playing.  |
| useVoiceChannel  | Boolean | If the user usually makes voice calls.     |
| createdAt        | Date    | The date when the ad was created.          |

## Use Cases

| Method | Route                  | Description                     |
| :----- | :--------------------  | :------------------------------ |
| `GET`  | [/games](#list-games)       | Game listing with ad count |
| `POST` | [/games/:id/ads](#create-ads) | Creation of the new ad   |
| `GET`  | [/games/:id/ads](#list-ads) | List of ads by game        |
| `GET`  | [/ads/:id/discord](#discord) | Search discord by ad id   |

### List Games

`GET` _/games_

#### Response

```json
{
  "id": "1",
  "title": "League of Legends",
  "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
  "_count": {
    "ads": 4
  }
}
```

### Create Ads

`POST` _/games/:id/ads_

#### Request

```json
{
  "name": "John Doe",
  "yearsPlaying": "5",
  "discord": "JohnDoe#1234",
  "weekDays": [4, 5],
  "hourStart": "18:00",
  "hourEnd": "22:00",
  "useVoiceChannel": true
}
```

#### Response

```json
{
  "id": "1",
  "gameId": "5",
  "name": "John Doe",
  "yearsPlaying": "5",
  "discord": "JohnDoe#1234",
  "weekDays": [4, 5],
  "hourStart": "18:00",
  "hourEnd": "22:00",
  "useVoiceChannel": true,
  "createdAt": "2020-05-01T00:00:00.000Z"
}
```

### List Ads

`GET` _/games/:id/ads_

#### Response

```json
[
  {
    "id": "1",
    "name": "John Doe",
    "yearsPlaying": "5",
    "discord": "JohnDoe#1234",
    "weekDays": [4, 5],
    "hourStart": "18:00",
    "hourEnd": "22:00",
    "useVoiceChannel": true
  }
]
```

### Discord

`GET` _/ads/:id/discord_

#### Response

```json
{
  "discord": "JohnDoe#1234"
}
```

## Acknowledgments

> This project was developed during the Ignite Bootcamp by Rocketseat.




