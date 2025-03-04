# Otto

Social media posts, managed

## Data organisation structure

```
data/
  |- index.json # contains the index for all posts group by theme, topic
  |- twitter/
        |- [slug]-[dd-mm-yy].md # individual post
  |- bluesky/
        |- [slug]-[dd-mm-yy].md
  |- linkedin/
        |- [slug]-[dd-mm-yy].md
```

### index.json file

```json
[
  {
    "type": "group",
    "platforms": [
      {
        "name": "twitter",
        "path": "twitter/[slug]-[dd-mm-yy].md"
      }
    ],
    "name": "string",
    "date": "dd-mm-yyyy"
  },
  {
    "type": "single",
    "platform": {
      "name": "twitter",
      "path": "twitter/[slug]-[dd-mm-yy].md"
    },
    "date": "dd-mm-yyyy"
  }
]
```
