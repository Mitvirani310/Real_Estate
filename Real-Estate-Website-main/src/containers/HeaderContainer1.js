import React, { useState } from "react";
import links from "../constants/routes/nav-links1";
import { HeaderWrapper, Banner, Jumbotron } from "../components";

import { AdvancedSearchContainer, SideNavigationContainer } from "./index";

const HeaderContainer1 = ({ bg, source }) => {
  const [sideNavShown, setSideNavShown] = useState(false);
  const [sideNavHidden, setSideNavHidden] = useState(true);
  const [fixed, setFixed] = useState(false);

  const changeBackgroundColorAndPosition = () => {
    if (window.pageYOffset > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColorAndPosition);

  const handleSideNavigation = () => {
    setSideNavHidden((prevState) => !prevState);
    setSideNavShown((prevState) => !prevState);
  };
  return (
    <Banner bg={bg} source={source}>
      <HeaderWrapper bg={bg} fixed={fixed}>
        <HeaderWrapper.Container>
          <HeaderWrapper.Title bg={bg}>
            <HeaderWrapper.Link bg={bg} fixed={fixed} to="/">
              Real Home
            </HeaderWrapper.Link>
          </HeaderWrapper.Title>
          <HeaderWrapper.LinksContainer>
            <HeaderWrapper.List links="links">
              {links.map((link) => (
                <HeaderWrapper.Item key={link.to}>
                  <HeaderWrapper.Anchor bg={bg} fixed={fixed} to={`${link.to}`}>
                    {link.name}
                  </HeaderWrapper.Anchor>
                </HeaderWrapper.Item>
              ))}
            </HeaderWrapper.List>
             <HeaderWrapper.List side="side">
              <HeaderWrapper.Item>
                <HeaderWrapper.Button onClick={handleSideNavigation}>
                  <HeaderWrapper.Icon name="fa fa-bars" />
                </HeaderWrapper.Button>
              </HeaderWrapper.Item>
            </HeaderWrapper.List> 
          </HeaderWrapper.LinksContainer>
        </HeaderWrapper.Container>
      </HeaderWrapper>
      {bg === "true" && (
        <Jumbotron>
          <Jumbotron.Left>
            <Jumbotron.Title>Find The Home You Deserve With Us</Jumbotron.Title>
            <Jumbotron.Text>
              We Are Here To Serve You The Best From Us.
            </Jumbotron.Text>
          </Jumbotron.Left>
          <Jumbotron.Right>
<br/> <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>      
<br/> <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>  
<br/> <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>        </Jumbotron.Right>
        </Jumbotron>
      )}
      {/* <SideNavigationContainer
        sideNavShown={sideNavShown}
        sideNavHidden={sideNavHidden}
        setSideNavHidden={setSideNavHidden}
        setSideNavShown={setSideNavShown}
      /> */}
    </Banner>
  );
};

export default HeaderContainer1;
