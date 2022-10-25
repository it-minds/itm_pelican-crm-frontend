import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
	policies?: string[]; // Todo: Type should be AccessPolicies as generated from backend database schema
	children: ReactElement;
}

const ProtectedRoute = ({ children, policies }: Props) => {
	return children ? children : <Outlet />;
};

export default ProtectedRoute;
