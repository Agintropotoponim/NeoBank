export interface IConfirmDenialProps {
    denyHandler: () => Promise<void>
    closeTabHandler: () => void
}