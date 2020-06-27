import style from 'styled-components';

const Header = style.header`
    position: fixed;
    top: 0;
    background-color: white;
    width: 100%;
`;

const Menu = style.nav`
    display: flex;
    padding: 0.85rem 12.5rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;

    .item-nav {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }

    .search {
        color: #ccc;
        position: relative;

        input {
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            padding: 5px 6px 5px 20px;
            border-radius: 3px;
            outline: none;
        }

        .icon-search {
            position: absolute;
            left: 3.5rem;
            top: 0.5rem;
            font-size: 0.70rem;
        }

        :focus-within .icon-search {
            left: 6px;
            top: 7px;
        }

        .icon-exit {
            display: none;
            font-size: 0.70rem;
        }

        :focus-within .icon-exit {
            display: inline;
            position: absolute;
            right: 6px;
            top: 8px;
        }

        input {
            :focus::placeholder {
                text-align: left;
            }

            ::placeholder {
                text-align: center;
            }
        }
    }

    .icon-button {
        margin-right: 1.5rem;
    }

    .actions {
        justify-content: flex-end;
    }
`;

export {
    Header,
    Menu,
};
