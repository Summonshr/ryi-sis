export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm a-delete ' + className}>
            {message}
        </p>
    ) : null;
}
