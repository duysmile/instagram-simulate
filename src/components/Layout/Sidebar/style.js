import style from 'styled-components';

const ItemUser = style.div`
    display: flex;
    align-items: center;

    .username {
        font-weight: bold;
    }

    .info-user {
        margin-left: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
    }

    .status, .time-story {
        color: #888;
    }

    .time-story {
        text-transform: lower-case;
    }
`;

const Sidebar = style.div`
    position: fixed;
    background-color: white;
    right: 30.5rem;
    top: 6rem;
    width: 20rem;

    .header-sidebar {
        margin-left: 0.5rem;
    }
`;

const Stories = style.div`
    padding: 1rem 1rem 0 1rem;
    margin-top: 1rem;

    .header {
        display: flex;
        justify-content: space-between;

        span {
               color: #888;
               font-weight: bold;
        }

        a {
            font-weight: bold;
            margin-right: 1rem;
        }
    }

    .body {
        margin: 0.5rem 0 0 0;
        max-height: 175px;
        overflow-y: auto;
    }

    .story {
        margin: 1rem 0;
        a.follow-btn {
            color: #0095f6;
            margin-right: 1rem;
        }

        > .friends {
            overflow-y: auto;
            max-height: 250px;
        }
    }
`;

export {
    ItemUser,
    Sidebar,
    Stories,
};
