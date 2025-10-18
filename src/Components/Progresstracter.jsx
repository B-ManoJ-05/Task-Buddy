export default function ProgressTracker({tasks}) {

     let completedTasks = tasks.filter((t)=>t.completed).length;
     let totaltasks = tasks.length;
     let percenteage = totaltasks == 0 ? 0: (completedTasks/totaltasks) * 100;
    
  return (
    <div className='progress-tracker'>
        <p>
            {completedTasks} out of {totaltasks} tasks Completed
        </p>

        <div className='progress-bar'>
            <div className='progress'
            style={{width: `${percenteage}%`}}>
            </div>
        </div>
    </div>
  )
}