import './styles/theme.css'
import './styles/global.css'
import {Heading} from "./components/Heading.tsx";

export function App() {
    console.log('App is running!');
    return <>
        <Heading attr1={123} attr2={'string'}>Hello, world!</Heading>
    </>
}