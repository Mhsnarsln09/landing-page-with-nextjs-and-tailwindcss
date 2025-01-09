
interface ButtonProps {
    btnClass: string
    title: string
}

const Button: React.FC<ButtonProps> = ({ btnClass, title }) => {
    return (
        <button className={`${btnClass} text-base font-medium`}>
            {title}
        </button>
    );
}

export default Button;