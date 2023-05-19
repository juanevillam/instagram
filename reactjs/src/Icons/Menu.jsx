export const MenuIconMobileLightMode = () => {
    return (
        <svg className="dark:hidden flex" fill="none" height="18" viewBox="0 0 22 18" width="22">
            <path d="M0.996368 0.75C0.996368 0.335786 1.33215 0 1.74637 0H21.2464C21.6606 0 21.9964 0.335786 21.9964 0.75C21.9964 1.16421 21.6606 1.5 21.2464 1.5H1.74637C1.33215 1.5 0.996368 1.16421 0.996368 0.75Z" fill="black" />
            <path d="M0.996368 8.75C0.996368 8.33579 1.33215 8 1.74637 8H21.2464C21.6606 8 21.9964 8.33579 21.9964 8.75C21.9964 9.16421 21.6606 9.5 21.2464 9.5H1.74637C1.33215 9.5 0.996368 9.16421 0.996368 8.75Z" fill="black" />
            <path d="M1.74637 16C1.33215 16 0.996368 16.3358 0.996368 16.75C0.996368 17.1642 1.33215 17.5 1.74637 17.5H21.2464C21.6606 17.5 21.9964 17.1642 21.9964 16.75C21.9964 16.3358 21.6606 16 21.2464 16H1.74637Z" fill="black" />
        </svg>
    );
};

export const MenuIconMobileDarkMode = () => {
    return (
        <svg className="dark:flex hidden" fill="none" height="18" viewBox="0 0 22 18" width="22">
            <path d="M0.996368 0.75C0.996368 0.335786 1.33215 0 1.74637 0H21.2464C21.6606 0 21.9964 0.335786 21.9964 0.75C21.9964 1.16421 21.6606 1.5 21.2464 1.5H1.74637C1.33215 1.5 0.996368 1.16421 0.996368 0.75Z" fill="white" />
            <path d="M0.996368 8.75C0.996368 8.33579 1.33215 8 1.74637 8H21.2464C21.6606 8 21.9964 8.33579 21.9964 8.75C21.9964 9.16421 21.6606 9.5 21.2464 9.5H1.74637C1.33215 9.5 0.996368 9.16421 0.996368 8.75Z" fill="white" />
            <path d="M1.74637 16C1.33215 16 0.996368 16.3358 0.996368 16.75C0.996368 17.1642 1.33215 17.5 1.74637 17.5H21.2464C21.6606 17.5 21.9964 17.1642 21.9964 16.75C21.9964 16.3358 21.6606 16 21.2464 16H1.74637Z" fill="white" />
        </svg>
    );
};

export const MenuIconMobile = ({ newState, setState }) => {
    return (
        <div className="cursor-pointer" onClick={ () => setState( newState ) }>
            <MenuIconMobileLightMode />
            <MenuIconMobileDarkMode />
        </div>
    );
};