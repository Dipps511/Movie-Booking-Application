import React from "react";
import Details from "../details/Details";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
    },
    gridList: {
        width: 1000,
        height: 1050,

    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
});

export default function Movies({ movieData }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={350} cols={3.5}>
                {movieData.map((tile) => {
                    var expectedDate = new Date(tile.release_date).toDateString();

                    return (
                        <GridListTile key={tile.id}>
                            <Link to={"/movie/" + tile.id}>
                                <img
                                    src={tile.poster_url}
                                    alt={tile.title}
                                    style={{
                                        width: "100%",
                                        alignItems: "center",
                                        margin: "0px",
                                    }}
                                />

                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>Release Date: {expectedDate}</span>}
                                actionIcon={
                                    <IconButton
                                        aria-label={`info about ${tile.title}`}
                                        className={classes.icon}
                                    />
                                }
                            />
                            </Link>
                        </GridListTile>
                    );
                })}
            </GridList>
        </div>
    );
}