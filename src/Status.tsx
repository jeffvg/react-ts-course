type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'loading up...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully'
    } else if (props.status === 'error') {
        message = 'Opps something went wrong fetching data'
    }
    return (
        <div>
        <h2>Status - {message}</h2>
        </div>
    )
}