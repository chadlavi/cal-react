import styled from "@emotion/styled"
import * as React from "react"
import theme from "../../../theme/cal.theme"

export const NavUl = styled(({show, ...props}) => <ul {...props}/>)<{show: boolean}>({
  listStyleType: "none",
  margin: 0,
  padding: 0,
  height: "100%",
  width: "100%",
}, (props) => (
  {
    [theme.metrics.helpers.under(theme.metrics.breakpoints.sm)]: {
      display: props.show ? "block" : "none",
      maxHeight: props.show ? "100vh" : 0,
      transition: "max-height 10s ease-in-out",
    },
  }),
)
