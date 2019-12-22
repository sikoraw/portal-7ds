import React from "react";
import { connect } from "react-redux";
import { Menu, Sidebar, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "react-bootstrap";
import MobileSidebarItem from "./sidebarItem";
import MobileMenuUserInformation from "./userInformation";

const mapStateToProps = ({ session }) => ({
  session
});

const MobileSidebar = props => {
  return (
    <>
      <Sidebar
        as={Menu}
        animation="push"
        onHide={() => props.toggleSidebar(false)}
        vertical
        visible={props.visible}
        className="my-sidebar"
      >
        <div className="sidebar-menu-items-container">
          <div className="sidebar-header">
            <Button
              variant="link"
              className="button-icon"
              onClick={() => props.toggleSidebar(false)}
            >
              <Icon name="x" />
            </Button>
          </div>
          <MobileMenuUserInformation />

          <MobileSidebarItem
            href="/dashboard"
            iconName="home"
            text="Strona główna"
          />
          <MobileSidebarItem
            href="/dashboard/room-reservation/menu"
            iconName="calendar alternate outline"
            text="Rezerwacja salek"
          />
          {props.session.role === "admin" ? (
            <MobileSidebarItem
              href="/dashboard/management"
              iconName="cog"
              text="Administracja"
            />
          ) : null}
        </div>
      </Sidebar>
    </>
  );
};

export default connect(mapStateToProps, null)(MobileSidebar);
