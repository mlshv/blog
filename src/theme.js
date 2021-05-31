import { css } from '@linaria/core'

export const globals = css`
    :global() {
        html {
            box-sizing: border-box;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
                'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            line-height: 1.4;
        }

        a {
            text-decoration: none;
            color: #58a6ff;

            &:visited {
                color: #cf58ff;
            }

            &:hover {
                box-shadow: 0 1px 0 currentColor;
            }
        }

        @media (prefers-color-scheme: dark) {
            html {
                background: #1b1b1b;
                color: #fff;
            }
        }
    }
`
