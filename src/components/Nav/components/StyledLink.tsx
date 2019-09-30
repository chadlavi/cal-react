import styled from "@emotion/styled"
import * as React from "react"
import { Link } from "react-router-dom"
import theme from "../../../theme/cal.theme"

export const StyledLink = styled(
  ({active, ...props}) => <Link {...props}/>)<{active: boolean}>(
  {
    "boxSizing": "border-box",
    "textDecoration": "none",
    "display": "block",
    "textAlign": "center",
    "fontFamily": theme.font.sansSerif,
    "fontVariantCaps": "all-small-caps",
    "padding": theme.metrics.padding.default,
    "&:hover": {
      backgroundColor: theme.color.background.nav.hover,
    },
    "@media (hover: none)" : {
      "&:hover": {
        backgroundColor: "none",
      },
    },
    "&:focus": {
      ...theme.borders.focusStyle.inset,
    },
  }, (props) => (
    {
      "&, &:hover": {
        backgroundColor: props.active
          ? theme.color.primary[500]
          : undefined,
        color: props.active
          ? theme.color.white
          : theme.color.text.nav,
        fontWeight: props.active ? "bold" : 500,
      },
    }),
)
