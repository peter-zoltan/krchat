import "./IconButton.css"

export type IconButtonProps = {
    name: String
    text: String
    onClick: () => void
}

export function IconButton( { name, text, onClick } : IconButtonProps ) {
    return <div class="IconButton">
        <button type="button" onClick={ onClick } >
                <span class="material-symbols-outlined">
                    { name }
                </span>
                { text }
            </button>
    </div>
}