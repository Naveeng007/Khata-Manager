import React from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filter'
import 'react-dates/initialize'
class ListFilters extends React.Component{
    state={
        calendarFocused:null
    }

    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}))
    }
    render(){
      return  (
    
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value))
                   
                }}/>
        
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e)=>{
                        if(e.target.value==='amount'){
                            this.props.dispatch(sortByAmount())
                        }
                        else if(e.target.value==='date'){
                            this.props.dispatch(sortByDate())
                        }
                    }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}//1 month calendar will be shown
                        isOutsideRange={()=>false}//previous days now we can pick
                        showClearDates={true}//cut option will come
                        startDateId="startDateId"//as added by maker of DateRangepicker...some confusion here like why?
                         endDateId="endDateId"//bz to make it different from SingleDatePicker
                    />
            </div>
            
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        filters:state.filters
    }
}
export default connect(mapStateToProps)(ListFilters);