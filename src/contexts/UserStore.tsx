import { makeVar, useReactiveVar } from '@apollo/client';
import { FC } from 'react';

type Role = 'admin' | 'user' | 'guest';

export const activeUser = {
	id: -1,
	name: '',
	role: 'admin',
	isLoggedIn: true,
};

export type ActiveUser = typeof activeUser;

const userVar = makeVar<ActiveUser>(activeUser);

const useLoginState = () => {
	return useReactiveVar(userVar);
};

const setActiveUser = (user: ActiveUser) => {
	userVar(user);
};

const logout = () => {
	userVar(activeUser);
};

type AccessType = {
	role: Role;
	children: React.ReactNode;
};

const Access: FC<AccessType> = ({ role, children }) => {
	const user = useLoginState();
	return user.role === role ? <>{children}</> : <></>;
};

export { Access };

export default {
	setActiveUser,
	logout,
	useLoginState,
};
