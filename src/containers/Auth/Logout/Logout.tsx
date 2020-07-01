import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

const Logout = (props: any) => {
	const { onLogout } = props;

	useEffect(() => {
		onLogout();
	}, [onLogout]);

	return <Redirect to="/" />;
};

const mapDispatchToProps = {
	onLogout: actions.logout,
};

export default connect(null, mapDispatchToProps)(Logout);
