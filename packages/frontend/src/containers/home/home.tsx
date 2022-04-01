import { Scroll } from "@react-three/drei";
import { useEffect, useLayoutEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router";
import { useTransition, config } from "react-spring";
import styled from "styled-components";
import { Background } from "../../components/background/background";
import Planet from "../../components/background/Planet";
import { Page, PageManager } from "../../components/page/page";
import { StarGroup } from "../../components/star/star";
import { WarpedPlane } from "../../components/warped/warped";
import "./home.css";
import { About } from "./scene/about";
import { Scene1 } from "./scene/scene1";
import { Scene2 } from "./scene/scene2";

const StyledHomeContainer = styled.div`
  display: inline;
`;

function HomeContainer() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
  });
  return (
    <StyledHomeContainer>
      <Background>
        <WarpedPlane />
      </Background>
      <PageManager>
        {transitions((props, items) => (
          <Routes location={items}>
            <Route index element={<Scene1 style={props} />} />
            <Route path="About" element={<About />} />
          </Routes>
        ))}
      </PageManager>
    </StyledHomeContainer>
  );
}

export default HomeContainer;
