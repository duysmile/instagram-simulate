import style from 'styled-components';

const Card = style.div`
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    margin-right: 1rem;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0.75rem;
    }

    .card-body {
        img {
            width: 100%;
        }

        .actions {
            margin: 0.5rem 0.75rem;
            display: flex;
            justify-content: space-between;
        }

        .reaction {
            a {
                margin-right: 0.5rem;
            }
        }

        .likes {
            margin-left: 0.75rem;
            font-weight: bold;
        }

        .content {
            margin-right: 1.5rem;
            margin-left: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .comments {
            margin-left: 1.5rem;
            margin-bottom: 0.5rem;

            .comment {
                display: flex;
                justify-content: space-between;
                padding-right: 1rem;
            }
        }

        .time {
            margin-bottom: 0.5rem;
            color: #888;
            font-size: 0.65rem;
            margin-left: 0.75rem;
            text-transform: uppercase;
        }
    }

    a.owner {
        font-weight: bold;
    }

    .card-footer {
        border-top: 1px solid #ccc;
        .comment-form {
            padding: 1rem 1.5rem;
            display: flex;

            input[type="text"] {
                border: none;
                outline: none;
                flex-grow: 1;
            }

            input[type="submit"] {
                background-color: transparent;
                border: none;
                color: #0095f6;
                font-weight: bold;
                width: auto;
            }
        }
    }
`;

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

export {
    Card,
    ItemUser,
};
