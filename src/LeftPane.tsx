import { chatService, ConversationDto } from "./ChatService";
import { ConversationCard } from "./ConversationCard";
import "./LeftPane.css"
import { TextInputAndButton } from "./TextInputAndButton";
import { useState } from "preact/hooks";

export function LeftPane( { selected, onSelect }: {
    selected?: ConversationDto,
    onSelect: ( conversation: ConversationDto ) => void
} )
{
    let [ invite, setInvite ] = useState( "" );
    return <div class="LeftPane">
        <p>My tag: { chatService.inbox.user.tag }</p>
        <TextInputAndButton value={ invite } onChange={ setInvite } buttonContent="Invite"
            placeholder="Tag" iconName="add" 
            onClick={ () =>
            {
                if ( invite ) {
                    setInvite("");
                    chatService.send( { type: "contactRequest", email: invite, firstMessage: "hello"} );
                }
            } } />
        <div className="conversations">
            { chatService.inbox.conversations.map( x => 
                <ConversationCard key={ x.channelId } conversation={ x }
                selected={ x === selected } onSelect={ () => onSelect( x ) } /> )
            }
        </div>
    </div>
}