.app {
  max-width: 900px;
  margin: 40px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.add-btn {
  background-color: #007bff;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.add-btn:hover {
  background-color: #0056b3;
}

.board {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.column {
  background: #ecf0f1;
  border-radius: 8px;
  padding: 20px;
  width: 30%;
  min-height: 400px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.column h2 {
  margin: 0 0 10px 0;
  color: #34495e;
}

.task {
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  user-select: none;
  font-weight: 500;
}

.task.dragging {
  background-color: #d1e7fd;
}
