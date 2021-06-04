import { configure } from "enzyme"
// TODO: Use official enzyme-adapter-react-17 when available (https://github.com/enzymejs/enzyme/issues/2429)
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

configure({ adapter: new Adapter() })
