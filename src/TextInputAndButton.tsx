import "./TextInputAndButton.css"
import { TextInput, TextInputProps } from "./TextInput";
import { IconButton } from "./IconButton";

export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    onClick?: () => void;
    iconName: String;
}

export function TextInputAndButton( { buttonContent, onClick, iconName, ...textInputProps }:
    TextInputAndButtonProps )
{
    return <div class="TextInputAndButton">
        <TextInput { ...textInputProps } onEnter={ onClick } />
        <IconButton name={ iconName } text={ buttonContent } onClick={ onClick }/>
    </div>
}