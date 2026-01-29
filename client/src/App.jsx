import RequestForm from './components/RequestForm'
import HistoryList from './components/HistoryList'
import './App.css'

function App() {

  return (
    <>
      <header className="app-header">
        <div className="logo">⚡ Postman Lite</div>
      </header>
      <div className="app-layout">
        <main className="main-content">
          <RequestForm />
        </main>
        <aside className="sidebar">
          <h3>History</h3>
          <HistoryList />
        </aside>
      </div>
    </>
  )
}

export default App
