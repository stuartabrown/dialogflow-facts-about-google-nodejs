Request {
  "responseId": "c766b215-2ef3-48b6-8006-7fd400f5ad95-b81332aa",
  "queryResult": {
    "queryText": "Sure",
    "action": "tell.fact",
    "parameters": {
      "category": "history"
    },
    "allRequiredParamsPresent": true,
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            ""
          ]
        }
      }
    ],
    "outputContexts": [
      {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/choose_fact-followup",
        "lifespanCount": 5,
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/actions_capability_media_response_audio",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/actions_capability_audio_output",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/actions_capability_account_linking",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/actions_capability_screen_output",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/google_assistant_input_type_voice",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/_actions_on_google",
        "lifespanCount": 98,
        "parameters": {
          "data": "{\"facts\":{\"headquarters\":[\"Google's headquarters is in Stuart View, California.\",\"Google has over 30 cafeterias in its main campus.\",\"Google has over 10 fitness facilities in its main campus.\"],\"history\":[\"Google was founded in 1998.\",\"Google went public in 2004.\"]},\"cats\":[\"Cats are animals.\",\"Cats have nine lives.\",\"Cats descend from other cats.\"]}",
          "category": "history",
          "category.original": "History"
        }
      }
    ],
    "intent": {
      "name": "projects/dialogflow-facts-about-ecb9d/agent/intents/606781f6-3761-447b-a769-2e9ca538b91a",
      "displayName": "tell_fact"
    },
    "intentDetectionConfidence": 1,
    "languageCode": "en"
  },
  "originalDetectIntentRequest": {
    "source": "google",
    "version": "2",
    "payload": {
      "user": {
        "locale": "en-US",
        "lastSeen": "2019-11-14T20:00:08Z",
        "userVerificationStatus": "VERIFIED"
      },
      "conversation": {
        "conversationId": "ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw",
        "type": "ACTIVE",
        "conversationToken": "[\"_actions_on_google\",\"choose_fact-followup\"]"
      },
      "inputs": [
        {
          "intent": "actions.intent.TEXT",
          "rawInputs": [
            {
              "inputType": "VOICE",
              "query": "Sure"
            }
          ],
          "arguments": [
            {
              "name": "text",
              "rawText": "Sure",
              "textValue": "Sure"
            }
          ]
        }
      ],
      "surface": {
        "capabilities": [
          {
            "name": "actions.capability.MEDIA_RESPONSE_AUDIO"
          },
          {
            "name": "actions.capability.AUDIO_OUTPUT"
          },
          {
            "name": "actions.capability.ACCOUNT_LINKING"
          },
          {
            "name": "actions.capability.SCREEN_OUTPUT"
          }
        ]
      },
      "availableSurfaces": [
        {
          "capabilities": [
            {
              "name": "actions.capability.SCREEN_OUTPUT"
            },
            {
              "name": "actions.capability.WEB_BROWSER"
            },
            {
              "name": "actions.capability.AUDIO_OUTPUT"
            }
          ]
        }
      ]
    }
  },
  "session": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw"
}
Headers {
  "content-type": "application/json",
  "host": "a7fb4a76.ngrok.io",
  "content-length": "4833",
  "accept": "*/*",
  "user-agent": "Google-Dialogflow",
  "accept-encoding": "gzip,deflate,br",
  "x-forwarded-proto": "https",
  "x-forwarded-for": "64.233.172.236"
}
Conversation {
  "responses": [],
  "expectUserResponse": true,
  "digested": false,
  "noInputs": [],
  "speechBiasing": [],
  "_responded": false,
  "_ordersv3": false,
  "request": "[Excluded]",
  "headers": "[Excluded]",
  "_init": {},
  "sandbox": false,
  "input": {
    "raw": "Sure",
    "type": "VOICE"
  },
  "surface": {
    "capabilities": {
      "list": [
        {
          "name": "actions.capability.MEDIA_RESPONSE_AUDIO"
        },
        {
          "name": "actions.capability.AUDIO_OUTPUT"
        },
        {
          "name": "actions.capability.ACCOUNT_LINKING"
        },
        {
          "name": "actions.capability.SCREEN_OUTPUT"
        }
      ]
    }
  },
  "available": {
    "surfaces": {
      "list": [
        {
          "capabilities": {
            "list": [
              {
                "name": "actions.capability.SCREEN_OUTPUT"
              },
              {
                "name": "actions.capability.WEB_BROWSER"
              },
              {
                "name": "actions.capability.AUDIO_OUTPUT"
              }
            ]
          }
        }
      ],
      "capabilities": {
        "surfaces": [
          {
            "capabilities": {
              "list": [
                {
                  "name": "actions.capability.SCREEN_OUTPUT"
                },
                {
                  "name": "actions.capability.WEB_BROWSER"
                },
                {
                  "name": "actions.capability.AUDIO_OUTPUT"
                }
              ]
            }
          }
        ]
      }
    }
  },
  "user": {
    "raw": {
      "locale": "en-US",
      "lastSeen": "2019-11-14T20:00:08Z",
      "userVerificationStatus": "VERIFIED"
    },
    "storage": {},
    "locale": "en-US",
    "verification": "VERIFIED",
    "permissions": [],
    "last": {
      "seen": "2019-11-14T20:00:08.000Z"
    },
    "name": {},
    "entitlements": [],
    "access": {},
    "profile": {}
  },
  "arguments": {
    "parsed": {
      "input": {
        "text": "Sure"
      },
      "list": [
        "Sure"
      ]
    },
    "status": {
      "input": {},
      "list": [
        null
      ]
    },
    "raw": {
      "list": [
        {
          "name": "text",
          "rawText": "Sure",
          "textValue": "Sure"
        }
      ],
      "input": {
        "text": {
          "name": "text",
          "rawText": "Sure",
          "textValue": "Sure"
        }
      }
    }
  },
  "device": {},
  "id": "ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw",
  "type": "ACTIVE",
  "screen": true,
  "body": "[Excluded]",
  "version": 2,
  "action": "tell.fact",
  "intent": "tell_fact",
  "parameters": {
    "category": "history"
  },
  "contexts": {
    "_session": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw",
    "input": {
      "choose_fact-followup": {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/choose_fact-followup",
        "lifespan": 5,
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      "actions_capability_media_response_audio": {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/actions_capability_media_response_audio",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      "actions_capability_audio_output": {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/actions_capability_audio_output",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      "actions_capability_account_linking": {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/actions_capability_account_linking",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      "actions_capability_screen_output": {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/actions_capability_screen_output",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      "google_assistant_input_type_voice": {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/google_assistant_input_type_voice",
        "parameters": {
          "category": "history",
          "category.original": "History"
        }
      },
      "_actions_on_google": {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/_actions_on_google",
        "lifespan": 98,
        "parameters": {
          "data": "{\"facts\":{\"headquarters\":[\"Google's headquarters is in Stuart View, California.\",\"Google has over 30 cafeterias in its main campus.\",\"Google has over 10 fitness facilities in its main campus.\"],\"history\":[\"Google was founded in 1998.\",\"Google went public in 2004.\"]},\"cats\":[\"Cats are animals.\",\"Cats have nine lives.\",\"Cats descend from other cats.\"]}",
          "category": "history",
          "category.original": "History"
        }
      }
    },
    "output": {}
  },
  "incoming": {
    "parsed": [
      ""
    ]
  },
  "query": "Sure",
  "data": {
    "facts": {
      "headquarters": [
        "Google's headquarters is in Stuart View, California.",
        "Google has over 30 cafeterias in its main campus.",
        "Google has over 10 fitness facilities in its main campus."
      ],
      "history": [
        "Google was founded in 1998.",
        "Google went public in 2004."
      ]
    },
    "cats": [
      "Cats are animals.",
      "Cats have nine lives.",
      "Cats descend from other cats."
    ]
  }
}
Response {
  "status": 200,
  "headers": {
    "content-type": "application/json;charset=utf-8"
  },
  "body": {
    "payload": {
      "google": {
        "expectUserResponse": true,
        "richResponse": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "Sure, here's a history fact. Google was founded in 1998.",
                "displayText": "Sure, here's a history fact."
              }
            },
            {
              "simpleResponse": {
                "textToSpeech": "Would you like to hear another fact?"
              }
            },
            {
              "basicCard": {
                "title": "Google was founded in 1998.",
                "image": {
                  "url": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_GSA.2e16d0ba.fill-300x300.png",
                  "accessibilityText": "Google app logo"
                },
                "buttons": [
                  {
                    "title": "Learn more",
                    "openUrlAction": {
                      "url": "https://www.google.com/about/"
                    }
                  }
                ]
              }
            }
          ],
          "suggestions": [
            {
              "title": "Sure"
            },
            {
              "title": "No thanks"
            }
          ]
        }
      }
    },
    "outputContexts": [
      {
        "name": "projects/dialogflow-facts-about-ecb9d/agent/sessions/ABwppHGJDPszo5HvEpf0_AOH4-yFVaPwnvt0BMpcN6sL7wVDJWA8Ro7Dj75rCXDf5PPj8Kgct6LWgk97IFCytstv38zckzz7Aa5Hrw/contexts/_actions_on_google",
        "lifespanCount": 99,
        "parameters": {
          "data": "{\"facts\":{\"headquarters\":[\"Google's headquarters is in Stuart View, California.\",\"Google has over 30 cafeterias in its main campus.\",\"Google has over 10 fitness facilities in its main campus.\"],\"history\":[\"Google went public in 2004.\"]},\"cats\":[\"Cats are animals.\",\"Cats have nine lives.\",\"Cats descend from other cats.\"]}"
        }
      }
    ]
  }
}