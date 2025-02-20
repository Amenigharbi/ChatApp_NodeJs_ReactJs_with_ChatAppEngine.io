
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage=(props)=>{
  return (
    <div style={{height:'100vh'}}>
    <PrettyChatWindow
      projectId="47218644-c521-405c-8a09-5182cbaf7862"
      // eslint-disable-next-line react/prop-types
      username={props.user.username}
      // eslint-disable-next-line react/prop-types
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  );
}
export default ChatsPage;