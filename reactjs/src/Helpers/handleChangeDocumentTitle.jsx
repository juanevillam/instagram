export const handleChangeDocumentTitle = ( useLocation, actualPath, newDocumentTitle ) => {
    if ( useLocation.pathname === actualPath ) {
        document.title = newDocumentTitle; 
    };
};