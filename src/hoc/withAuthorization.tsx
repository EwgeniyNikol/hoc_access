import type { ComponentType } from 'react';
import AccessDenied from '../components/AccessDenied';

function withAuthorization<P extends object>(
  WrappedComponent: ComponentType<P>,
  allowedRoles: string[]
) {
  function ComponentWithAuth(props: P & { currentUser?: { roles: string[] } }) {
    const { currentUser, ...rest } = props;

    const hasAccess = currentUser?.roles?.some(role => allowedRoles.includes(role));

    if (!hasAccess) {
      return <AccessDenied />;
    }

    return <WrappedComponent {...(rest as P)} currentUser={currentUser} />;
  }

  ComponentWithAuth.displayName = `withAuthorization(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithAuth;
}

export default withAuthorization;