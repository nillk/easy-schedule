import { connect } from 'react-redux'
import TimeTable from '../components/TimeTable'

const mapStateToProps = state => {
  return {
    programs: state.programs
  };
}

const Schedule = connect(mapStateToProps)(TimeTable)

export default Schedule