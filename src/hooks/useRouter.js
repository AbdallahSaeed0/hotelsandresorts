import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { getPageTitle, getBreadcrumbs, isActiveRoute } from '../utils/navigation';

/**
 * Custom hook that provides enhanced routing utilities
 * @returns {object} Router utilities
 */
export const useRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    const router = useMemo(() => ({
        // Basic router functions
        navigate,
        location,
        params,

        // Enhanced utilities
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,
        state: location.state,

        // Navigation helpers
        push: (path, options = {}) => navigate(path, { replace: false, ...options }),
        replace: (path, options = {}) => navigate(path, { replace: true, ...options }),
        back: () => navigate(-1),
        forward: () => navigate(1),

        // Page utilities
        getPageTitle: () => getPageTitle(location.pathname),
        getBreadcrumbs: () => getBreadcrumbs(location.pathname),
        isActive: (route) => isActiveRoute(location.pathname, route),

        // Query utilities
        getQuery: () => new URLSearchParams(location.search),
        getQueryParam: (key) => new URLSearchParams(location.search).get(key),

        // State utilities
        pushWithState: (path, state) => navigate(path, { state, replace: false }),
        replaceWithState: (path, state) => navigate(path, { state, replace: true })
    }), [navigate, location, params]);

    return router;
};

export default useRouter;
