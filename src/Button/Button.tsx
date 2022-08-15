type ButtonType = {
    name: string
    callback: () => void
    className: string
    disabled: boolean
}

export function Button({name, callback, className, disabled}: ButtonType) {
    return (
        <button
            disabled={disabled}
            className={className}
            onClick={callback}>
            {name}
        </button>
    )
}