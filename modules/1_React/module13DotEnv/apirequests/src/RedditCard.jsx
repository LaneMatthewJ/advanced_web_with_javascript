import React from "react";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActionIcon,
  CardActionIcons,
  CardActionButton,
  CardActionButtons,
  CardActions
} from "@rmwc/card";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";

export const RedditCard = ({ post }) => {
  console.log(post);

  return (
    <Card style={{ width: "21rem" }}>
      <CardPrimaryAction>
        <CardMedia
          sixteenByNine
          style={{
            backgroundImage: `url(${post.thumbnail})`
          }}
        />
        <div style={{ padding: "0 1rem 1rem 1rem" }}>
          <Typography use="headline6" tag="h2">
            {post.title}
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="textSecondaryOnBackground"
            style={{ marginTop: "-1rem" }}
          >
            by {post.author}
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <a href={post.url}>
            <CardActionButton>Read</CardActionButton>
          </a>
          <CardActionButton>Bookmark</CardActionButton>
        </CardActionButtons>
        <CardActionIcons>
          <CardActionIcon onIcon="favorite" icon="favorite_border" />
          <CardActionIcon icon="share" />
          <CardActionIcon icon="more_vert" />
        </CardActionIcons>
      </CardActions>
    </Card>
  );
};
