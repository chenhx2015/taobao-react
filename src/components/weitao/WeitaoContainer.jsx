import { connect } from "react-redux";
import WeitaoList from "./WeitaoList";
import fetch from "cross-fetch";
import { addweitaodata } from "../../store/action/actions";
import { basic_url } from "../../env";

const fetchData = (dispatch, getState) => {
  return fetch(basic_url + "/mockData/weitao.json", {})
    .then(res => {
      return res.json();
    })
    .then(res => {
      dispatch(addweitaodata(res.listData));
    });
};
const mapStateToProps = state => ({
  list: state.weitao
});
const mapDispatchToProps = (dispatch, state) => ({
  fetchData: () => dispatch(fetchData)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeitaoList);

// export default class WeitaoContain extends Component{
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             // <WeitaoList list={this.state.listData} />
//             <WeitaoContainer />
//         )
//     }
//     componentDidMount() {
//         this.context.store.dispatch(fetchData)
//     }
//     static contextTypes = {
//         store: PropTypes.object
//     }
// }
