// 第一关：同学的 E/F/Q 玩法规则 + test 的地图与美术。

window.RestaurantMap = {
  width: 1440, height: 960,
  kitchenBounds: { x: 306, y: 292, width: 828, height: 382 },
  spawn: { x: 720, y: 540 },
  tools: [{"id": "ingredients", "x": 390, "y": 342, "scale": 0.7}, {"id": "potatoes", "x": 500, "y": 342, "scale": 0.7}, {"id": "oven", "x": 610, "y": 342, "scale": 0.7}, {"id": "sink", "x": 720, "y": 342, "scale": 0.7}, {"id": "cutting", "x": 830, "y": 342, "scale": 0.7}, {"id": "stove", "x": 940, "y": 342, "scale": 0.7}, {"id": "fryer", "x": 1050, "y": 342, "scale": 0.7}, {"id": "storage", "x": 355, "y": 486, "scale": 0.7}, {"id": "trash", "x": 1085, "y": 486, "scale": 0.7}, {"id": "buffer1", "x": 390, "y": 624, "scale": 0.7}, {"id": "buffer3", "x": 522, "y": 624, "scale": 0.7}, {"id": "extra", "x": 654, "y": 624, "scale": 0.7}, {"id": "plating", "x": 786, "y": 624, "scale": 0.7}, {"id": "buffer4", "x": 918, "y": 624, "scale": 0.7}, {"id": "serving", "x": 1050, "y": 624, "scale": 0.7}],
  seats: [
    { x: 430, y: 165 }, { x: 625, y: 165 }, { x: 820, y: 165 }, { x: 1015, y: 165 },
    { x: 430, y: 824 }, { x: 625, y: 824 }, { x: 820, y: 824 }, { x: 1015, y: 824 },
    { x: 148, y: 396 }, { x: 148, y: 588 }, { x: 1292, y: 396 }, { x: 1292, y: 588 }
  ],
  belt: { left: 220, top: 220, right: 1220, bottom: 760, radius: 80, width: 62, speed: 180, loadPoint: { x: 1050, y: 760 } }
};
// SVG 自身即可提供准确的闭合回转坐标，避免画面与移动轨迹不一致。
RestaurantMap.belt.length = document.getElementById('rm-belt-path').getTotalLength();
RestaurantMap.belt.pointAt = function(distance) {
  const length = this.length;
  const d = ((distance % length) + length) % length;
  const point = document.getElementById('rm-belt-path').getPointAtLength(d);
  return { x: point.x, y: point.y };
};


window.ChefSpriteData='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NzYiIGhlaWdodD0iNTc2IiB2aWV3Qm94PSIwIDAgMTQ0IDE0NCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZ1ciIgeDE9IjAiIHkxPSIwIiB4Mj0iLjciIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmMGQzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWRjNThmIi8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY3JlYW0iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmZWY3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjNlOGQ1Ii8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iaGF0IiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2VhZThkZiIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImV5ZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzViNTI1MCIvPjxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjMzQzNDM4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjQyNzMxIi8+PC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPCEtLSDouqvkvZPlkoznn63nn63nmoTliY3niKrvvIzkv53nlZnlj4LogIPnhafniYfkuK3nmoTnmb3og7jkuI7lpbbmsrnmqZjoibLog4zmr5vjgIIgLS0+CiAgPHBhdGggZD0iTTQ0IDEwNVEyNSAxMDUgMjYgMTIyUTI4IDEyOSA0NCAxMjMiIGZpbGw9InVybCgjZnVyKSIgc3Ryb2tlPSIjYjU5MTZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxwYXRoIGQ9Ik00NyA5NFEzMiAxMDYgMzggMTI1UTQ1IDEzNSA3MiAxMzRRMTAwIDEzNSAxMDcgMTI1UTExMyAxMDUgOTcgOTRaIiBmaWxsPSJ1cmwoI2Z1cikiIHN0cm9rZT0iI2I1OTE2ZiIgc3Ryb2tlLXdpZHRoPSIxLjciLz4KICA8cGF0aCBkPSJNNTEgOTdRNzIgMTAzIDk0IDk3TDk2IDExMUw5MCAxMDlMODggMTE3TDgyIDExNEw3NyAxMjJMNzAgMTE5TDY0IDEyNEw1OSAxMTZMNTIgMTE5TDQ5IDEwOVoiIGZpbGw9InVybCgjY3JlYW0pIi8+CiAgPGcgaWQ9ImNoZWYtcmVzdGluZy1wYXdzIj4KICA8ZWxsaXBzZSBjeD0iNTIiIGN5PSIxMjUiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNmZmY2ZTciIHN0cm9rZT0iI2M0YWM5NiIgc3Ryb2tlLXdpZHRoPSIxLjMiLz4KICA8ZWxsaXBzZSBjeD0iOTIiIGN5PSIxMjUiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNmZmY2ZTciIHN0cm9rZT0iI2M0YWM5NiIgc3Ryb2tlLXdpZHRoPSIxLjMiLz4KICA8cGF0aCBkPSJNNDggMTI2VjEzME01MyAxMjZWMTMxTTg4IDEyNlYxMzFNOTMgMTI2VjEzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGFiNmFhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPC9nPgogIDwhLS0g5bCP6ICM56uL6LW355qE6ICz5py177yM5LiN6IO96KKr55m95Y6o5biI5bi95a6M5YWo6YGu5L2P44CCIC0tPgogIDxwYXRoIGQ9Ik0zNyA3M1EyNyA2NSAyOSA0NFE0MyA0NCA1MiA1OUw5NCA1OVExMDQgNDUgMTE2IDQ0UTExNyA2NSAxMDcgNzRaIiBmaWxsPSJ1cmwoI2Z1cikiIHN0cm9rZT0iI2I1OTE2ZiIgc3Ryb2tlLXdpZHRoPSIxLjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNMzUgNTJRNDQgNTQgNDYgNjJMMzYgNjZaIE0xMDkgNTJRMTAwIDU0IDk5IDYyTDEwOSA2NloiIGZpbGw9IiNlNWI1YTUiLz4KICA8cGF0aCBkPSJNMzkgNThRNTMgNDkgNzIgNTFROTQgNDkgMTA3IDYxUTExNyA3MyAxMTMgODhMMTE3IDkyTDExMSA5NEwxMTMgOTlMMTA2IDEwMFE5NiAxMTMgNzIgMTE0UTQ3IDExNCAzNyAxMDFMMzAgMTAwTDMzIDk0TDI3IDkyTDMxIDg4UTI3IDcwIDM5IDU4WiIgZmlsbD0idXJsKCNmdXIpIiBzdHJva2U9IiNiNTkxNmYiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPCEtLSDmn5TlkozmqZjoibLpop3nurnjgIHnmb3oibLpvLvmooHkuI7ok6zmnb7nmoTlj6PpvLvjgIIgLS0+CiAgPHBhdGggZD0iTTUzIDU2UTU0IDY1IDYyIDcwUTU2IDU5IDYxIDU0TTY4IDUzUTY3IDY2IDcyIDczUTc3IDY1IDc2IDUzTTg0IDU0UTg5IDYwIDgzIDcwUTk0IDY0IDkyIDU3IiBmaWxsPSIjZDZhNTZkIiBvcGFjaXR5PSIuNyIvPgogIDxwYXRoIGQ9Ik0zNCA3OUw0NCA4MkwzMyA4NU0xMTAgNzlMMTAwIDgyTDExMiA4NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDZhNTZkIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iLjc1Ii8+CiAgPHBhdGggZD0iTTcyIDcxUTY2IDc4IDY1IDg2UTQ5IDg1IDQ3IDk2UTUyIDEwOCA3MiAxMDlROTIgMTA5IDk4IDk2UTk2IDg1IDc5IDg2UTc4IDc4IDcyIDcxWiIgZmlsbD0idXJsKCNjcmVhbSkiLz4KICA8ZWxsaXBzZSBjeD0iNTMiIGN5PSI4MCIgcng9IjkuNCIgcnk9IjEwLjEiIGZpbGw9IiNmZmY1ZTQiIHN0cm9rZT0iI2I2OWI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8ZWxsaXBzZSBjeD0iOTEiIGN5PSI4MCIgcng9IjkuNCIgcnk9IjEwLjEiIGZpbGw9IiNmZmY1ZTQiIHN0cm9rZT0iI2I2OWI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8ZWxsaXBzZSBjeD0iNTQiIGN5PSI4MSIgcng9IjcuNCIgcnk9IjguNiIgZmlsbD0idXJsKCNleWUpIi8+CiAgPGVsbGlwc2UgY3g9IjkwIiBjeT0iODEiIHJ4PSI3LjQiIHJ5PSI4LjYiIGZpbGw9InVybCgjZXllKSIvPgogIDxlbGxpcHNlIGN4PSI1MS41IiBjeT0iNzcuNSIgcng9IjIuNSIgcnk9IjIuOSIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIGN4PSI4Ny41IiBjeT0iNzcuNSIgcng9IjIuNSIgcnk9IjIuOSIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9IjU3IiBjeT0iODUiIHI9IjEuMSIgZmlsbD0iI2I3YzBjNyIvPjxjaXJjbGUgY3g9IjkzIiBjeT0iODUiIHI9IjEuMSIgZmlsbD0iI2I3YzBjNyIvPgogIDxlbGxpcHNlIGN4PSI0MiIgY3k9Ijk0IiByeD0iNiIgcnk9IjMiIGZpbGw9IiNlZmM0YWUiIG9wYWNpdHk9Ii41NSIvPjxlbGxpcHNlIGN4PSIxMDIiIGN5PSI5NCIgcng9IjYiIHJ5PSIzIiBmaWxsPSIjZWZjNGFlIiBvcGFjaXR5PSIuNTUiLz4KICA8cGF0aCBkPSJNNjcgOTJRNzIgODkgNzcgOTJRNzcgOTQgNzIgOTdRNjcgOTQgNjcgOTJaIiBmaWxsPSIjZGM5YjkxIiBzdHJva2U9IiNiZDgwN2EiIHN0cm9rZS13aWR0aD0iLjgiLz4KICA8cGF0aCBkPSJNNzIgOTdWMTAwTTcyIDEwMFE2OCAxMDQgNjUgMTAwTTcyIDEwMFE3NiAxMDQgNzkgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNhZDgzNzYiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8cGF0aCBkPSJNNDQgOTVMMjkgOTNNNDQgOTlMMjkgMTAxTTEwMCA5NUwxMTUgOTNNMTAwIDk5TDExNSAxMDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MzYWQ5NCIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwhLS0g55m96Imy5aSn5Y6o5biI5bi977ya6JOs5p2+6KS255qx5bi95Yag5LiO5a695bi95bim44CCIC0tPgogIDxwYXRoIGQ9Ik0zOCAzN1EyNCAzMyAyOCAyMVEzMCAxMyA0MCAxNFE0MyA0IDU0IDhRNjEgMCA3MiA1UTg0IDEgOTEgOVExMDMgNSAxMDggMTZRMTIwIDE4IDExNiAyOVExMTQgMzcgMTA2IDM4TDEwMiA0N0g0MloiIGZpbGw9InVybCgjaGF0KSIgc3Ryb2tlPSIjYjVhYTliIiBzdHJva2Utd2lkdGg9IjEuNyIvPgogIDxwYXRoIGQ9Ik00MCAxOVEzNyAyNyA0NCAzNU01MyAxM1E0OSAyNCA1NiAzNU02NiAxMFE2MiAyMiA2NiAzNU04MCAxMFE4NSAyMiA3OSAzNU05NCAxNVExMDAgMjUgOTEgMzVNMTA3IDIxUTExMCAyOCAxMDEgMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q4ZDVjZCIgc3Ryb2tlLXdpZHRoPSIyLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik00MCAzNlE3MiAzMCAxMDUgMzZMMTAzIDUwUTcyIDQ0IDQyIDUwWiIgZmlsbD0idXJsKCNoYXQpIiBzdHJva2U9IiNiNWFhOWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHBhdGggZD0iTTQ2IDM5UTcyIDM1IDEwMCAzOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
window.ChefHoldingSpriteData='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NzYiIGhlaWdodD0iNTc2IiB2aWV3Qm94PSIwIDAgMTQ0IDE0NCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZ1ciIgeDE9IjAiIHkxPSIwIiB4Mj0iLjciIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmMGQzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWRjNThmIi8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY3JlYW0iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmZWY3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjNlOGQ1Ii8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iaGF0IiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2VhZThkZiIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImV5ZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzViNTI1MCIvPjxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjMzQzNDM4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjQyNzMxIi8+PC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPCEtLSDouqvkvZPlkoznn63nn63nmoTliY3niKrvvIzkv53nlZnlj4LogIPnhafniYfkuK3nmoTnmb3og7jkuI7lpbbmsrnmqZjoibLog4zmr5vjgIIgLS0+CiAgPHBhdGggZD0iTTQ0IDEwNVEyNSAxMDUgMjYgMTIyUTI4IDEyOSA0NCAxMjMiIGZpbGw9InVybCgjZnVyKSIgc3Ryb2tlPSIjYjU5MTZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxwYXRoIGQ9Ik00NyA5NFEzMiAxMDYgMzggMTI1UTQ1IDEzNSA3MiAxMzRRMTAwIDEzNSAxMDcgMTI1UTExMyAxMDUgOTcgOTRaIiBmaWxsPSJ1cmwoI2Z1cikiIHN0cm9rZT0iI2I1OTE2ZiIgc3Ryb2tlLXdpZHRoPSIxLjciLz4KICA8cGF0aCBkPSJNNTEgOTdRNzIgMTAzIDk0IDk3TDk2IDExMUw5MCAxMDlMODggMTE3TDgyIDExNEw3NyAxMjJMNzAgMTE5TDY0IDEyNEw1OSAxMTZMNTIgMTE5TDQ5IDEwOVoiIGZpbGw9InVybCgjY3JlYW0pIi8+CiAgPGcgaWQ9ImNoZWYtcmVzdGluZy1wYXdzIiBvcGFjaXR5PSIwIj4KICA8ZWxsaXBzZSBjeD0iNTIiIGN5PSIxMjUiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNmZmY2ZTciIHN0cm9rZT0iI2M0YWM5NiIgc3Ryb2tlLXdpZHRoPSIxLjMiLz4KICA8ZWxsaXBzZSBjeD0iOTIiIGN5PSIxMjUiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNmZmY2ZTciIHN0cm9rZT0iI2M0YWM5NiIgc3Ryb2tlLXdpZHRoPSIxLjMiLz4KICA8cGF0aCBkPSJNNDggMTI2VjEzME01MyAxMjZWMTMxTTg4IDEyNlYxMzFNOTMgMTI2VjEzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGFiNmFhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPC9nPgogIDwhLS0g5bCP6ICM56uL6LW355qE6ICz5py177yM5LiN6IO96KKr55m95Y6o5biI5bi95a6M5YWo6YGu5L2P44CCIC0tPgogIDxwYXRoIGQ9Ik0zNyA3M1EyNyA2NSAyOSA0NFE0MyA0NCA1MiA1OUw5NCA1OVExMDQgNDUgMTE2IDQ0UTExNyA2NSAxMDcgNzRaIiBmaWxsPSJ1cmwoI2Z1cikiIHN0cm9rZT0iI2I1OTE2ZiIgc3Ryb2tlLXdpZHRoPSIxLjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNMzUgNTJRNDQgNTQgNDYgNjJMMzYgNjZaIE0xMDkgNTJRMTAwIDU0IDk5IDYyTDEwOSA2NloiIGZpbGw9IiNlNWI1YTUiLz4KICA8cGF0aCBkPSJNMzkgNThRNTMgNDkgNzIgNTFROTQgNDkgMTA3IDYxUTExNyA3MyAxMTMgODhMMTE3IDkyTDExMSA5NEwxMTMgOTlMMTA2IDEwMFE5NiAxMTMgNzIgMTE0UTQ3IDExNCAzNyAxMDFMMzAgMTAwTDMzIDk0TDI3IDkyTDMxIDg4UTI3IDcwIDM5IDU4WiIgZmlsbD0idXJsKCNmdXIpIiBzdHJva2U9IiNiNTkxNmYiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPCEtLSDmn5TlkozmqZjoibLpop3nurnjgIHnmb3oibLpvLvmooHkuI7ok6zmnb7nmoTlj6PpvLvjgIIgLS0+CiAgPHBhdGggZD0iTTUzIDU2UTU0IDY1IDYyIDcwUTU2IDU5IDYxIDU0TTY4IDUzUTY3IDY2IDcyIDczUTc3IDY1IDc2IDUzTTg0IDU0UTg5IDYwIDgzIDcwUTk0IDY0IDkyIDU3IiBmaWxsPSIjZDZhNTZkIiBvcGFjaXR5PSIuNyIvPgogIDxwYXRoIGQ9Ik0zNCA3OUw0NCA4MkwzMyA4NU0xMTAgNzlMMTAwIDgyTDExMiA4NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDZhNTZkIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iLjc1Ii8+CiAgPHBhdGggZD0iTTcyIDcxUTY2IDc4IDY1IDg2UTQ5IDg1IDQ3IDk2UTUyIDEwOCA3MiAxMDlROTIgMTA5IDk4IDk2UTk2IDg1IDc5IDg2UTc4IDc4IDcyIDcxWiIgZmlsbD0idXJsKCNjcmVhbSkiLz4KICA8ZWxsaXBzZSBjeD0iNTMiIGN5PSI4MCIgcng9IjkuNCIgcnk9IjEwLjEiIGZpbGw9IiNmZmY1ZTQiIHN0cm9rZT0iI2I2OWI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8ZWxsaXBzZSBjeD0iOTEiIGN5PSI4MCIgcng9IjkuNCIgcnk9IjEwLjEiIGZpbGw9IiNmZmY1ZTQiIHN0cm9rZT0iI2I2OWI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8ZWxsaXBzZSBjeD0iNTQiIGN5PSI4MSIgcng9IjcuNCIgcnk9IjguNiIgZmlsbD0idXJsKCNleWUpIi8+CiAgPGVsbGlwc2UgY3g9IjkwIiBjeT0iODEiIHJ4PSI3LjQiIHJ5PSI4LjYiIGZpbGw9InVybCgjZXllKSIvPgogIDxlbGxpcHNlIGN4PSI1MS41IiBjeT0iNzcuNSIgcng9IjIuNSIgcnk9IjIuOSIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIGN4PSI4Ny41IiBjeT0iNzcuNSIgcng9IjIuNSIgcnk9IjIuOSIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9IjU3IiBjeT0iODUiIHI9IjEuMSIgZmlsbD0iI2I3YzBjNyIvPjxjaXJjbGUgY3g9IjkzIiBjeT0iODUiIHI9IjEuMSIgZmlsbD0iI2I3YzBjNyIvPgogIDxlbGxpcHNlIGN4PSI0MiIgY3k9Ijk0IiByeD0iNiIgcnk9IjMiIGZpbGw9IiNlZmM0YWUiIG9wYWNpdHk9Ii41NSIvPjxlbGxpcHNlIGN4PSIxMDIiIGN5PSI5NCIgcng9IjYiIHJ5PSIzIiBmaWxsPSIjZWZjNGFlIiBvcGFjaXR5PSIuNTUiLz4KICA8cGF0aCBkPSJNNjcgOTJRNzIgODkgNzcgOTJRNzcgOTQgNzIgOTdRNjcgOTQgNjcgOTJaIiBmaWxsPSIjZGM5YjkxIiBzdHJva2U9IiNiZDgwN2EiIHN0cm9rZS13aWR0aD0iLjgiLz4KICA8cGF0aCBkPSJNNzIgOTdWMTAwTTcyIDEwMFE2OCAxMDQgNjUgMTAwTTcyIDEwMFE3NiAxMDQgNzkgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNhZDgzNzYiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8cGF0aCBkPSJNNDQgOTVMMjkgOTNNNDQgOTlMMjkgMTAxTTEwMCA5NUwxMTUgOTNNMTAwIDk5TDExNSAxMDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MzYWQ5NCIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwhLS0g55m96Imy5aSn5Y6o5biI5bi977ya6JOs5p2+6KS255qx5bi95Yag5LiO5a695bi95bim44CCIC0tPgogIDxwYXRoIGQ9Ik0zOCAzN1EyNCAzMyAyOCAyMVEzMCAxMyA0MCAxNFE0MyA0IDU0IDhRNjEgMCA3MiA1UTg0IDEgOTEgOVExMDMgNSAxMDggMTZRMTIwIDE4IDExNiAyOVExMTQgMzcgMTA2IDM4TDEwMiA0N0g0MloiIGZpbGw9InVybCgjaGF0KSIgc3Ryb2tlPSIjYjVhYTliIiBzdHJva2Utd2lkdGg9IjEuNyIvPgogIDxwYXRoIGQ9Ik00MCAxOVEzNyAyNyA0NCAzNU01MyAxM1E0OSAyNCA1NiAzNU02NiAxMFE2MiAyMiA2NiAzNU04MCAxMFE4NSAyMiA3OSAzNU05NCAxNVExMDAgMjUgOTEgMzVNMTA3IDIxUTExMCAyOCAxMDEgMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q4ZDVjZCIgc3Ryb2tlLXdpZHRoPSIyLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik00MCAzNlE3MiAzMCAxMDUgMzZMMTAzIDUwUTcyIDQ0IDQyIDUwWiIgZmlsbD0idXJsKCNoYXQpIiBzdHJva2U9IiNiNWFhOWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHBhdGggZD0iTTQ2IDM5UTcyIDM1IDEwMCAzOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
// 可复用番茄素材。透明背景，size 为逻辑画布中的宽度，坐标为素材中心。
// 用法：TomatoArt.draw(ctx, 'tomato' | 'chopped' | 'cooked', x, y, size)
window.TomatoArt = (() => {
  const tau = Math.PI * 2;
  function ellipse(c,x,y,rx,ry,fill,rotation=0,stroke=null,width=2) {
    c.beginPath(); c.ellipse(x,y,rx,ry,rotation,0,tau);
    if(fill){c.fillStyle=fill;c.fill();}
    if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}
  }
  function whole(c) {
    // 饱满的果形、低饱和阴影和两处反光，参考整颗番茄的轮廓。
    c.beginPath(); c.moveTo(0,-28);
    c.bezierCurveTo(-24,-42,-48,-13,-45,13);
    c.bezierCurveTo(-43,40,-16,47,0,42);
    c.bezierCurveTo(22,48,47,33,46,9);
    c.bezierCurveTo(45,-17,23,-39,0,-28);
    c.closePath(); c.fillStyle='#e96551'; c.fill();
    c.strokeStyle='#a94c3d';c.lineWidth=2.5;c.stroke();
    c.beginPath();c.moveTo(27,-23);
    c.bezierCurveTo(52,14,20,42,-30,30);
    c.bezierCurveTo(-13,51,40,46,45,17);
    c.bezierCurveTo(48,1,40,-15,27,-23);
    c.fillStyle='#cf4f40';c.fill();
    ellipse(c,-19,-7,13,7,'#ffb19a',-.62);
    ellipse(c,-28,7,4,3,'#ffd3b8',-.62);
    // 不规则五角叶冠，与参考图一样保持大而清楚的绿色叶片。
    c.beginPath();c.moveTo(-3,-30);
    c.quadraticCurveTo(-9,-44,0,-49);
    c.quadraticCurveTo(8,-42,8,-33);
    c.quadraticCurveTo(25,-42,33,-33);
    c.lineTo(16,-26);c.quadraticCurveTo(26,-20,24,-12);
    c.lineTo(7,-21);c.quadraticCurveTo(5,-5,-2,-9);
    c.lineTo(-8,-25);c.lineTo(-26,-16);
    c.quadraticCurveTo(-28,-24,-17,-29);
    c.quadraticCurveTo(-34,-31,-31,-36);
    c.quadraticCurveTo(-16,-40,-3,-30);
    c.fillStyle='#79985b';c.fill();c.strokeStyle='#577347';c.lineWidth=1.6;c.stroke();
    c.beginPath();c.moveTo(0,-31);c.lineTo(2,-43);
    c.strokeStyle='#a9bc79';c.lineWidth=3;c.lineCap='round';c.stroke();
  }
  function oneSlice(c,x,y,r,angle) {
    c.save();c.translate(x,y);c.rotate(angle);
    ellipse(c,0,4,r,r*.88,'#bd4c3e');
    ellipse(c,0,0,r,r*.88,'#ef7968',0,'#ad4b3c',2.2);
    ellipse(c,0,0,r*.84,r*.73,'#f39780');
    // 四瓣籽腔和奶黄色小籽，缩小后仍能看出番茄横截面。
    for(let i=0;i<4;i++){
      const a=i*Math.PI/2+.2;
      const px=Math.cos(a)*r*.48,py=Math.sin(a)*r*.41;
      ellipse(c,px,py,r*.31,r*.23,'#d95b4b',a);
      for(let j=-1;j<=1;j++){
        const b=a+j*.43;
        ellipse(c,Math.cos(b)*r*.57,Math.sin(b)*r*.49,r*.065,r*.14,'#f6d59a',b-Math.PI/2);
      }
    }
    ellipse(c,0,0,r*.18,r*.16,'#f6ad8c');
    c.beginPath();c.ellipse(0,0,r*.9,r*.79,0,3.7,5.05);
    c.strokeStyle='#ffbd9c';c.lineWidth=2.5;c.lineCap='round';c.stroke();
    c.restore();
  }
  function sliced(c) {
    oneSlice(c,17,14,30,.24);
    oneSlice(c,-12,-11,32,-.26);
  }
  function chunk(c,x,y,s,angle) {
    c.save();c.translate(x,y);c.rotate(angle);c.scale(s,s);
    c.beginPath();c.moveTo(-16,-9);
    c.bezierCurveTo(-11,-18,7,-15,15,-8);
    c.bezierCurveTo(22,1,12,12,3,13);
    c.bezierCurveTo(-13,17,-23,2,-16,-9);
    c.closePath();c.fillStyle='#db6a43';c.fill();
    c.strokeStyle='#b45b3e';c.lineWidth=1.6;c.stroke();
    c.beginPath();c.moveTo(-11,-4);c.quadraticCurveTo(-1,-10,8,-4);
    c.strokeStyle='#f8b474';c.lineWidth=3.5;c.lineCap='round';c.stroke();
    ellipse(c,3,5,2.4,1.3,'#f1c17f',-.4);
    c.restore();
  }
  function cooked(c) {
    // 少量浅汤汁，食材仍是可辨认的软烂番茄块。
    ellipse(c,0,12,46,25,'#c77a4526');
    ellipse(c,0,6,44,24,'#eaa16b',0,'#c98655',1.5);
    ellipse(c,-2,3,37,18,'#edb77e');
    chunk(c,-18,-1,1.05,-.3);chunk(c,16,1,1.05,.35);chunk(c,1,16,.86,-.12);
    ellipse(c,-32,12,2.4,1.4,'#ffe1a3');ellipse(c,31,14,3,1.4,'#ffe1a3');
    // 极少量香草点缀，不会盖过番茄的橙红色。
    ellipse(c,0,-5,5,2,'#8d9a58',-.5);
  }
  const painters={tomato:whole,chopped:sliced,cooked};
  function draw(c,kind,x,y,size=48){
    const painter=painters[kind];if(!painter)return;
    c.save();c.translate(x,y);c.scale(size/100,size/100);painter(c);c.restore();
  }
  return {draw,kinds:['tomato','chopped','cooked']};
})();

// 汉堡食材，与 TomatoArt 一样使用中心坐标和可缩放的透明绘图。
window.BurgerArt = (() => {
  const tau=Math.PI*2;
  function ellipse(c,x,y,rx,ry,fill,stroke=null,width=2){
    c.beginPath();c.ellipse(x,y,rx,ry,0,0,tau);c.fillStyle=fill;c.fill();
    if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}
  }
  function breadSlice(c,x,y,angle){
    c.save();c.translate(x,y);c.rotate(angle);
    const outline=()=>{
      c.beginPath();c.moveTo(-29,-10);c.bezierCurveTo(-48,-39,-21,-45,0,-42);
      c.bezierCurveTo(28,-45,46,-32,30,-12);c.lineTo(33,34);
      c.quadraticCurveTo(0,43,-33,34);c.closePath();
    };
    outline();
    c.fillStyle='#d89a55';c.fill();c.strokeStyle='#98653f';c.lineWidth=2.5;c.stroke();
    c.save();c.scale(.86,.86);outline();c.fillStyle='#fff0ca';c.fill();c.restore();
    for(const [dx,dy,rx,ry]of[[-17,-24,5,2],[12,-17,3,2],[-8,4,4,2],[15,20,4,2],[-19,27,3,2]])ellipse(c,dx,dy,rx,ry,'#e9d2a6');
    c.beginPath();c.moveTo(-29,-23);c.quadraticCurveTo(-22,-35,-9,-34);c.strokeStyle='#fff9df';c.lineWidth=3;c.lineCap='round';c.stroke();
    c.restore();
  }
  function bread(c){breadSlice(c,11,3,.13);breadSlice(c,-9,0,-.10);}
  function patty(c,cooked){
    ellipse(c,0,10,45,27,cooked?'#79503e':'#ba6970','#895342');
    ellipse(c,0,2,45,27,cooked?'#a16d4d':'#e69a94','#895342');
    ellipse(c,-7,-3,34,18,cooked?'#b27d58':'#edada0');
    for(const [x,y]of[[-26,-4],[-6,-13],[19,-5],[28,12],[-17,13],[4,8]]){
      ellipse(c,x,y,2.5,1.6,cooked?'#7e523c':'#f6c8b0');
    }
    if(cooked){
      c.strokeStyle='#77503c';c.lineWidth=4;c.lineCap='round';
      for(let i=0;i<3;i++){c.beginPath();c.moveTo(-24+i*18,-10);c.lineTo(-14+i*18,12);c.stroke();}
    }
  }
  function burger(c){
    // 配方只有面包、番茄片、熟肉饼，不增加额外食材。
    ellipse(c,0,31,44,14,'#daa05f','#97613c');
    ellipse(c,0,25,43,12,'#f3ce8d');
    ellipse(c,0,15,46,15,'#986346','#714b37',2.4);
    c.strokeStyle='#bb8b61';c.lineWidth=3;c.lineCap='round';
    for(const x of[-25,-8,10,27]){c.beginPath();c.moveTo(x-4,9);c.lineTo(x+4,16);c.stroke();}
    ellipse(c,-15,2,30,11,'#d45443','#a84c3a');
    ellipse(c,16,3,30,11,'#e97b61','#a84c3a');
    ellipse(c,-15,-1,25,6,'#f1a080');ellipse(c,17,0,25,6,'#f1a080');
    for(const x of[-25,-8,12,28])ellipse(c,x,0,2.5,1.5,'#ffe0a6');
    c.beginPath();c.moveTo(-46,-7);c.bezierCurveTo(-45,-47,42,-49,46,-7);
    c.bezierCurveTo(47,8,-44,9,-46,-7);c.closePath();
    c.fillStyle='#e6ad6a';c.fill();c.strokeStyle='#97613c';c.lineWidth=2.5;c.stroke();
    c.beginPath();c.moveTo(-38,-15);c.quadraticCurveTo(-27,-34,0,-34);c.strokeStyle='#ffdeb0';c.lineWidth=5;c.lineCap='round';c.stroke();
    for(const [x,y,a]of[[-21,-21,-.5],[0,-26,.3],[20,-21,-.3],[-9,-11,.4],[28,-10,-.4]]){
      c.save();c.translate(x,y);c.rotate(a);ellipse(c,0,0,2.4,4,'#fff3cf');c.restore();
    }
  }
  const painters={bread,rawPatty:c=>patty(c,false),cookedPatty:c=>patty(c,true),burger};
  function draw(c,kind,x,y,size=48){
    if(!painters[kind])return;
    c.save();c.translate(x,y);c.scale(size/100,size/100);painters[kind](c);c.restore();
  }
  return {draw,kinds:Object.keys(painters)};
})();

// 土豆、切片土豆和薯条共用的透明绘图素材。
window.FriesArt=(()=>{
  const tau=Math.PI*2;
  function ellipse(c,x,y,rx,ry,color,angle=0,stroke=null){
    c.beginPath();c.ellipse(x,y,rx,ry,angle,0,tau);c.fillStyle=color;c.fill();
    if(stroke){c.strokeStyle=stroke;c.lineWidth=2;c.stroke();}
  }
  function potato(c){
    c.beginPath();c.moveTo(-39,-13);c.bezierCurveTo(-39,-35,-7,-42,9,-31);
    c.bezierCurveTo(28,-36,46,-13,42,10);c.bezierCurveTo(42,35,13,43,-9,34);
    c.bezierCurveTo(-32,38,-48,12,-39,-13);c.closePath();
    c.fillStyle='#d3ad75';c.fill();c.strokeStyle='#a58359';c.lineWidth=2.5;c.stroke();
    ellipse(c,-12,-12,22,12,'#e6c997',-.35);
    for(const[x,y]of[[-25,-9],[-12,13],[14,-18],[27,6],[9,25]]){
      ellipse(c,x,y,2.4,1.8,'#ae8c5b',.3);ellipse(c,x-1,y-2,1.8,1,'#efdab0');
    }
  }
  function slices(c){
    for(const[x,y,a]of[[19,14,.32],[-3,3,-.1],[-22,-8,-.35]]){
      ellipse(c,x,y+3,18,29,'#d2ac70',a,'#b28a54');
      ellipse(c,x,y,17,27,'#ffedb3',a);
      ellipse(c,x-3,y-5,10,17,'#fff5d2',a);
    }
  }
  function stick(c,x,y,h,a){
    c.save();c.translate(x,y);c.rotate(a);
    c.beginPath();c.roundRect(-5,-h,11,h,2);c.fillStyle='#f6cd69';c.fill();
    c.strokeStyle='#b78a43';c.lineWidth=1.8;c.stroke();
    c.fillStyle='#ffe7a0';c.fillRect(-3,-h+3,3,h-5);
    c.fillStyle='#dba246';c.fillRect(4,-h+2,2,h-3);c.restore();
  }
  function fries(c){
    // 金黄薯条与红纸盒呼应参考图，使用小猫爪作为餐厅自己的装饰。
    for(const[x,y,h,a]of[[-27,0,38,-.25],[-15,-2,50,-.1],[-1,-1,42,.04],[12,-2,53,.13],[25,0,41,.28],[-22,4,31,.07],[-7,5,44,-.15],[8,5,33,.12],[22,5,36,.3]])stick(c,x,y,h,a);
    c.beginPath();c.moveTo(-35,-9);c.quadraticCurveTo(0,6,35,-9);c.lineTo(29,43);
    c.quadraticCurveTo(0,36,-29,43);c.closePath();c.fillStyle='#db6951';c.fill();
    c.strokeStyle='#a94d3f';c.lineWidth=2.5;c.stroke();
    c.beginPath();c.moveTo(-28,-4);c.lineTo(-24,35);c.strokeStyle='#ee9980';c.lineWidth=4;c.lineCap='round';c.stroke();
    ellipse(c,2,22,9,7,'#ffe0a0');
    for(const[x,y]of[[-9,12],[0,7],[10,12]])ellipse(c,x,y,3.6,4.6,'#ffe0a0',x*.04);
  }
  const painters={potato,potatoSlices:slices,fries};
  return {kinds:Object.keys(painters),draw(c,kind,x,y,size=48){
    if(!painters[kind])return;
    c.save();c.translate(x,y);c.scale(size/100,size/100);painters[kind](c);c.restore();
  }};
})();

// 主厨素材内嵌于 HTML；捧食物时按身体、手臂、食物、前爪的顺序绘制。
window.ChefArt={
  image:null,
  holdingImage:null,
  draw(c,x,y,size=98,holding=false){
    if(!this.image)return false;
    c.drawImage(holding&&this.holdingImage?this.holdingImage:this.image,x-size/2,y-size*.67,size,size);
    return true;
  },
  drawHoldingArms(c,x,y){
    c.save();c.translate(x,y);
    c.fillStyle='#f8e6c8';c.strokeStyle='#bea184';c.lineWidth=1.2;
    for(const side of [-1,1]){
      c.save();c.scale(side,1);
      c.beginPath();c.moveTo(20,8);c.bezierCurveTo(28,12,25,25,18,33);
      c.quadraticCurveTo(11,34,12,28);c.quadraticCurveTo(20,19,16,13);
      c.closePath();c.fill();c.stroke();c.restore();
    }
    c.restore();
  },
  drawHoldingPaws(c,x,y){
    c.save();c.translate(x,y);
    for(const side of [-1,1]){
      c.beginPath();c.ellipse(side*15,33,6.8,4.8,side*-.35,0,Math.PI*2);
      c.fillStyle='#fff6e7';c.fill();c.strokeStyle='#bea184';c.lineWidth=1.1;c.stroke();
      c.strokeStyle='#d9b6a8';c.lineWidth=.8;c.lineCap='round';
      for(const offset of [-1.6,1.6]){
        c.beginPath();c.moveTo(side*15+offset,32.5);c.lineTo(side*15+offset-.3*side,35);c.stroke();
      }
    }
    c.restore();
  }
};
if(typeof Image!=='undefined'){
  const chefImage=new Image();
  chefImage.onload=()=>{window.ChefArt.image=chefImage;};
  chefImage.src=window.ChefSpriteData;
  const holdingImage=new Image();
  holdingImage.onload=()=>{window.ChefArt.holdingImage=holdingImage;};
  holdingImage.src=window.ChefHoldingSpriteData;
}


// 单个音频实例，不把音乐编码进 JS；离线打开也能读取同目录 assets。
var music=(()=>{
  const audio=document.getElementById('bgm'),button=document.getElementById('music-toggle');
  let enabled=true,blocked=false,failed=false,pending=false,request=0;
  audio.volume=.25;audio.loop=true;
  function allowed(){return enabled&&typeof g!=='undefined'&&g&&g.running&&!g.suspended&&!document.hidden;}
  function refresh(){
    const text=failed?'音乐：加载失败':!enabled?'音乐：关':blocked?'点击开启音乐':'音乐：开';
    if(button.textContent!==text)button.textContent=text;
    button.setAttribute('aria-pressed',String(enabled));
    button.title=failed?'请确认 assets/bgm.m4a 与游戏一起解压。':blocked?'浏览器暂未允许自动播放，点击或按操作键即可开始。':enabled?'关闭背景音乐（当前音量 25%）':'开启背景音乐（音量 25%）';
  }
  function pause(rewind=false){
    ++request;pending=false;audio.pause();
    if(rewind){try{audio.currentTime=0;}catch(_){/* 未载入时本来就在起点。 */}}
    refresh();
  }
  function sync(){
    if(!allowed()){pause();return;}
    if(pending||!audio.paused||failed)return;
    pending=true;const ticket=++request;
    // 捕获自动播放策略或格式错误，不让音乐失败中断游戏。
    let play;
    try{play=audio.play();}catch(error){reject(error);return;}
    Promise.resolve(play).then(()=>{
      if(ticket!==request)return;
      pending=false;blocked=false;
      if(!allowed())pause();else refresh();
    },reject);
    function reject(error){
      if(ticket!==request)return;
      pending=false;
      if(error?.name==='NotAllowedError')blocked=true;
      else if(error?.name!=='AbortError')failed=true;
      refresh();
    }
  }
  function unlock(){if(!allowed())return;blocked=false;sync();}
  function restart(){pause(true);failed=false;blocked=false;sync();refresh();}
  button.addEventListener('click',()=>{
    // 自动播放被拦截时第一次点此按钮的含义是“开启”，不是静音。
    if(enabled&&blocked){blocked=false;sync();}else{enabled=!enabled;blocked=false;sync();}
    refresh();document.getElementById('game').focus();
  });
  document.addEventListener('pointerdown',event=>{if(!event.target.closest?.('button'))unlock();});
  audio.addEventListener('error',()=>{failed=true;pause();});
  refresh();
  return {sync,unlock,restart,stop:()=>pause(true)};
})();

// 玩法接口保留同学版本的物品 ID、g 状态和 E/F/Q 操作语义。
var canvas=document.getElementById('game'),ctx=canvas.getContext('2d');
var map=window.RestaurantMap,W=map.width,H=map.height,CR=23;
var LEVEL={duration:180,walkSpeed:207,sprintSpeed:380,cutDuration:1.5,cookDuration:1.5,fryDuration:1.5,patience:52.5,maxCustomers:5,beltSpeed:.06};
var ITEMS={
  tomato_raw:{name:'生番茄',art:'tomato'},tomato_cut:{name:'切好的番茄',art:'chopped'},tomato_cooked:{name:'熟番茄',art:'cooked'},
  bread:{name:'面包',art:'bread'},meat_raw:{name:'生肉饼',art:'rawPatty'},meat_cooked:{name:'熟肉饼',art:'cookedPatty'},
  burger:{name:'汉堡',art:'burger'},potato_raw:{name:'生土豆',art:'potato'},potato_cut:{name:'切好的土豆',art:'potatoSlices'},fries:{name:'薯条',art:'fries'}
};
// 熟肉饼只作配方材料，第一关的点单与可出餐列表严格限制为四道菜。
var SERVABLE=['tomato_cooked','bread','burger','fries'],ORDERS=SERVABLE.slice();
var BREEDS=[{name:'暹罗',body:'#eadbc1',ear:'#ab8567',face:'#ae8d74'},{name:'蓝猫',body:'#aabac2',ear:'#879da8'},
  {name:'橘猫',body:'#e5b279',ear:'#c6935c'},{name:'三花',body:'#fff1da',ear:'#d6a77b',spots:['#d6a77b','#71675c']},
  {name:'黑猫',body:'#6e6a63',ear:'#5c574f'},{name:'白猫',body:'#fff8eb',ear:'#e5beaa'}];
var stationSpecs={
  tomatoCrate:['ingredients','crate','番茄箱','tomato_raw'],potatoCrate:['potatoes','crate','土豆箱','potato_raw'],
  breadCrate:['sink','crate','面包箱','bread'],meatCrate:['oven','crate','肉饼箱','meat_raw'],
  cutting1:['cutting','cutting','切菜台'],stove1:['stove','stove','灶台'],fryer:['fryer','fryer','油锅'],
  prep1:['buffer1','surface','备菜1'],prep2:['buffer3','surface','备菜2'],prep3:['extra','surface','备菜3'],prep4:['plating','surface','备菜4'],prep5:['buffer4','surface','备菜5'],
  plate:['serving','plate','放传送带'],trashLeft:['storage','trash','垃圾桶'],trash:['trash','trash','垃圾桶']
};
var stationDefs={};
for(const [id,[mapId,type,label,item]]of Object.entries(stationSpecs)){
  const tool=map.tools.find(t=>t.id===mapId),scale=tool.scale??.7;
  stationDefs[id]={...tool,id,type,label,item,scale,w:136*scale,h:90*scale,topOffset:-42*scale};
}
var stationList=Object.values(stationDefs);
var obstacles=map.tools.map(t=>{const s=t.scale??.7;return {x:t.x,y:t.y,w:136*s,h:90*s,topOffset:-42*s};});
function projectOnBelt(x,y){
  let best=0,error=Infinity;
  for(let d=0;d<map.belt.length;d+=8){let p=map.belt.pointAt(d),e=Math.hypot(p.x-x,p.y-y);if(e<error){error=e;best=d;}}
  let result=best;for(let d=best-8;d<=best+8;d+=.5){let p=map.belt.pointAt(d),e=Math.hypot(p.x-x,p.y-y);if(e<error){error=e;result=d;}}
  return ((result%map.belt.length)+map.belt.length)%map.belt.length/map.belt.length;
}
function beltPos(progress){return map.belt.pointAt(progress*map.belt.length);}
var seats=map.seats.map((s,i)=>({...s,id:i,progress:projectOnBelt(s.x,s.y)}));
var loadProgress=projectOnBelt(map.belt.loadPoint.x,map.belt.loadPoint.y),g,lastTime=performance.now();
function reset(start=true){
  g={cat:{...map.spawn,speed:LEVEL.walkSpeed,sprint:LEVEL.sprintSpeed,r:20,dirX:0,dirY:-1},keys:{},hasItem:null,stations:stationDefs,
    surfaces:{prep1:[],prep2:[],prep3:[],prep4:[],prep5:[]},cuttingSurfaces:{cutting1:[]},stoveSurfaces:{stove1:[]},fryerSurface:[],
    cutting:{active:false,progress:0,duration:LEVEL.cutDuration},cooking:{active:false,progress:0,duration:LEVEL.cookDuration},frying:{active:false,progress:0,duration:LEVEL.fryDuration},
    isCharging:false,throwCharge:0,maxCharge:1.2,minThrowDist:60,maxThrowDist:330,thrownItems:[],beltItems:[],customers:[],
    score:0,served:0,missed:0,timeLeft:LEVEL.duration,elapsed:0,running:start,suspended:!!document.hidden,reason:start?'':'ready',beltP:0,beltSpeed:LEVEL.beltSpeed,spawnTimer:5,nextId:1,
    kCD:0,spinoTimer:0,spinoTextTimer:0,spinoTexts:[],
    speech:{text:'',timer:0},msg:'E 放取，按住 F 切菜，离开保留进度；灶台、油锅放入材料后自动加工。J 加速移动与所有加工。'};
  document.getElementById('start-overlay').hidden=start;
  document.getElementById('round-overlay').hidden=true;lastTime=performance.now();clearOrderTickets();
  if(start)spawn();else g.msg='欢迎来到猫猫回转食堂！先看看关卡介绍，点击「开始营业」后进入新手练习。';
  syncHud();syncOrders();syncBelt();if(start)music.restart();else{music.stop();document.getElementById('start-game').focus({preventScroll:true});}
}
function usable(){return g.running&&!g.suspended;}
function cancelCutting(){g.cutting.active=false;}
// 进度属于当前留在切菜台上的食材，拿走或换料时清空，避免继承给新材料。
function clearCutting(){g.cutting.active=false;g.cutting.progress=0;}
// 仅接入同学的 K 技能效果，操作键改为 J；冷却从发动时起算。
function useJ(){
  if(!usable()||g.kCD>0)return;
  g.kCD=30;g.spinoTimer=16;g.spinoTextTimer=0;g.spinoTexts=[];
  g.msg='脊背龙状态！16 秒内移动 ×1.8、切菜 / 煎煮 / 油炸速度 ×2，冷却 30 秒。';
}
function canStand(x,y){
  const r=g.cat.r,b=map.kitchenBounds;
  if(x-r<b.x||x+r>b.x+b.width||y-r<b.y||y+r>b.y+b.height)return false;
  return !obstacles.some(s=>{let left=s.x-s.w/2,top=s.y+s.topOffset,nx=Math.max(left,Math.min(x,left+s.w)),ny=Math.max(top,Math.min(y,top+s.h));return Math.hypot(x-nx,y-ny)<r;});
}
function nearStation(c,s){
  const left=s.x-s.w/2,top=s.y+s.topOffset;
  return Math.hypot(c.x-Math.max(left,Math.min(c.x,left+s.w)),c.y-Math.max(top,Math.min(c.y,top+s.h)))<=34;
}
function findNearestStation(c){
  let nearest=null,best=Infinity;
  for(const st of stationList){if(!nearStation(c,st))continue;const dx=c.x-st.x,dy=c.y-st.y,d=dx*dx+dy*dy;if(d<best){best=d;nearest=st;}}
  return nearest;
}
// 配方与加工映射沿用同学的规则。
function tryCombine(layers){var set={};layers.forEach(l=>set[l]=true);return layers.length===3&&Object.keys(set).length===3&&set.bread&&set.tomato_cut&&set.meat_cooked?'burger':null;}
function cutItem(item){return item==='tomato_raw'?'tomato_cut':item==='potato_raw'?'potato_cut':null;}
function cookItem(item){return item==='tomato_cut'?'tomato_cooked':item==='meat_raw'?'meat_cooked':null;}
function surfaceFor(st){return st.type==='surface'?g.surfaces[st.id]:st.type==='cutting'?g.cuttingSurfaces[st.id]:st.type==='stove'?g.stoveSurfaces[st.id]:st.type==='fryer'?g.fryerSurface:null;}
function processFor(st){return st.type==='cutting'?g.cutting:st.type==='stove'?g.cooking:st.type==='fryer'?g.frying:null;}
function accepts(st,item){return st.type==='cutting'?!!cutItem(item):st.type==='stove'?!!cookItem(item):st.type==='fryer'?item==='potato_cut':true;}
function finishProcess(process,layers,transform){
  const result=transform(layers[0]);
  if(result){layers[0]=result;g.msg=ITEMS[result].name+'做好了！按 E 拿走。';}
  process.active=false;process.progress=0;
}
function beginProcess(st){
  const process=processFor(st),layers=surfaceFor(st);
  if(process.duration<=0){finishProcess(process,layers,st.type==='stove'?cookItem:item=>item==='potato_cut'?'fries':null);return;}
  process.active=true;process.progress=0;g.msg=st.label+'开始加工，可以离开去准备其他食材。';
}
function putSurface(st,item){
  const layers=g.surfaces[st.id];if(layers.includes(item)){g.msg='台面上已有'+ITEMS[item].name+'，请先拿走或换一个台面。';return false;}
  if(layers.length>=3){g.msg='台面已放满，空手按 E 拿走食材。';return false;}
  layers.push(item);const result=tryCombine(layers);
  if(result){g.surfaces[st.id]=[result];g.msg='三样食材齐了，自动合成汉堡！空手 E 拿走。';}
  else g.msg='已放到'+st.label+'：'+ITEMS[item].name;return true;
}
function loadBelt(item){
  if(!SERVABLE.includes(item)){g.msg='这还是制作材料，第一关只上熟番茄、面包、汉堡和薯条。';return false;}
  const distance=g.beltItems.some(p=>{let d=Math.abs(p.progress-loadProgress);return Math.min(d,1-d)*map.belt.length<64;});
  if(distance){g.msg='上带口有餐盘，等前一盘转过去再放。';return false;}
  g.beltItems.push({id:g.nextId++,progress:loadProgress,type:item});g.speech={text:'上菜：'+ITEMS[item].name,timer:2.5};g.msg='放上传送带：'+ITEMS[item].name;return true;
}
function interact(){
  if(!usable()||g.isCharging)return;
  if(!g.hasItem){
    const ground=g.thrownItems.filter(t=>!t.flying&&Math.hypot(t.x-g.cat.x,t.y-g.cat.y)<34).sort((a,b)=>Math.hypot(a.x-g.cat.x,a.y-g.cat.y)-Math.hypot(b.x-g.cat.x,b.y-g.cat.y))[0];
    if(ground){g.hasItem=ground.item;g.thrownItems.splice(g.thrownItems.indexOf(ground),1);g.msg='捡起了'+ITEMS[g.hasItem].name;return;}
  }
  const st=findNearestStation(g.cat);if(!st){g.msg='走近工作台，或走到地上食材旁按 E。';return;}
  if(st.type==='crate'){if(g.hasItem)g.msg='手上已经有东西了。';else {g.hasItem=st.item;g.msg='从'+st.label+'拿出了'+ITEMS[st.item].name;}return;}
  if(st.type==='trash'){g.msg=g.hasItem?'丢掉了'+ITEMS[g.hasItem].name:'手上是空的。';g.hasItem=null;return;}
  if(st.type==='plate'){if(g.hasItem){if(loadBelt(g.hasItem))g.hasItem=null;}else g.msg='拿着做好的菜再按 E。';return;}
  const layers=surfaceFor(st),process=processFor(st);
  if(process?.active){g.msg=st.label+'正在加工，完成后再取。';return;}
  if(!g.hasItem){if(layers.length){g.hasItem=layers.pop();if(st.type==='cutting')clearCutting();g.msg='拿起了'+ITEMS[g.hasItem].name;}else g.msg=st.label+'是空的。';return;}
  if(st.type==='surface'){if(putSurface(st,g.hasItem))g.hasItem=null;return;}
  if(!accepts(st,g.hasItem)){g.msg='这份食材不适合'+st.label+'。';return;}
  if(layers.length){g.msg=st.label+'已有食材，先取走再放。';return;}
  layers.push(g.hasItem);g.hasItem=null;
  if(st.type==='cutting'){clearCutting();g.msg='已放上'+ITEMS[layers[0]].name+'，站在台旁按住 F 切菜；中断后保留进度。';}
  else beginProcess(st);
}
function startProcess(){
  if(!usable()||g.isCharging)return;
  const st=findNearestStation(g.cat),process=st&&processFor(st),layers=st&&surfaceFor(st);
  if(!process||!layers.length||!accepts(st,layers[0])){g.msg='先 E 放入食材；切菜按住 F，灶台和油锅会自动加工。';return;}
  if(st.type==='cutting'){g.msg='按住 F 继续切菜；松手或离开暂停，保留已有进度。';return;}
  g.msg=st.label+'放入材料后自动加工，无需按 F，可以先去准备其他食材。';
}
// Q 的轻按 / 蓄力阈值、最大蓄力与距离沿用同学版本。
function doThrow(){
  if(!g.isCharging)return;g.isCharging=false;
  if(!usable()||!g.hasItem){g.throwCharge=0;return;}
  let x=g.cat.x,y=g.cat.y,item=g.hasItem,charge=g.throwCharge;
  if(charge<.2){g.thrownItems.push({id:g.nextId++,x,y,tx:x,ty:y,item,flying:false});g.msg='把'+ITEMS[item].name+'放在了脚下，空手 E 可捡起。';}
  else {
    const ratio=Math.min(1,charge/g.maxCharge),dist=g.minThrowDist+(g.maxThrowDist-g.minThrowDist)*ratio,b=map.kitchenBounds;
    const tx=Math.max(b.x+15,Math.min(b.x+b.width-15,x+g.cat.dirX*dist)),ty=Math.max(b.y+15,Math.min(b.y+b.height-15,y+g.cat.dirY*dist));
    g.thrownItems.push({id:g.nextId++,x,y,sx:x,sy:y,tx,ty,item,flying:true,speed:700,total:Math.hypot(tx-x,ty-y)});g.msg='扔出去了！';
  }
  g.hasItem=null;g.throwCharge=0;
}
function handleThrowLanding(it){
  const candidates=stationList.filter(st=>Math.abs(it.x-st.x)<st.w/2+14&&Math.abs(it.y-(st.y-3))<st.h/2+14).sort((a,b)=>Math.hypot(it.x-a.x,it.y-a.y)-Math.hypot(it.x-b.x,it.y-b.y));
  const st=candidates[0];if(!st||st.type==='crate')return false;
  if(st.type==='trash'){g.msg='食材飞进了垃圾桶。';return true;}
  if(st.type==='plate')return loadBelt(it.item);
  if(st.type==='surface')return putSurface(st,it.item);
  const layers=surfaceFor(st),process=processFor(st);
  if(!accepts(st,it.item)||layers.length||process.active)return false;
  layers.push(it.item);
  if(st.type!=='cutting'){beginProcess(st);if(process.active)g.msg='投到了'+st.label+'，自动开始加工！';}
  else {clearCutting();g.msg='投到了切菜台，走近后按住 F 切菜。';}return true;
}
function settleOnFloor(it){
  // 落到箱子或满台边缘时，移到最近的空地，避免食物卡在碰撞体中无法捡回。
  if(canStand(it.x,it.y))return;
  for(let r=8;r<=160;r+=8)for(let a=0;a<Math.PI*2;a+=Math.PI/16){let x=it.x+Math.cos(a)*r,y=it.y+Math.sin(a)*r;if(canStand(x,y)){it.x=x;it.y=y;it.tx=x;it.ty=y;return;}}
  it.x=g.cat.x;it.y=g.cat.y;
}
function spawn(){
  if(!g.running||g.customers.length>=LEVEL.maxCustomers)return;
  const available=seats.filter(s=>!g.customers.some(c=>c.seat.id===s.id));if(!available.length)return;
  const seat=available[Math.floor(Math.random()*available.length)];
  g.customers.push({id:g.nextId++,seat,progress:seat.progress,order:ORDERS[Math.floor(Math.random()*ORDERS.length)],breed:BREEDS[Math.floor(Math.random()*BREEDS.length)],patience:LEVEL.patience,maxP:LEVEL.patience,state:'waiting',eatProgress:0});
}
function updateStep(dt){
  const powered=g.spinoTimer>0,workMult=powered?2:1;
  const c=g.cat,k=g.keys,speed=(k.shift?c.sprint:c.speed)*(powered?1.8:1);
  let dx=Number(!!k.d)-Number(!!k.a),dy=Number(!!k.s)-Number(!!k.w),n=Math.hypot(dx,dy);
  if(n){dx/=n;dy/=n;c.dirX=dx;c.dirY=dy;let mx=dx*speed*dt,my=dy*speed*dt;if(canStand(c.x+mx,c.y))c.x+=mx;if(canStand(c.x,c.y+my))c.y+=my;}
  if(g.isCharging)g.throwCharge=Math.min(g.maxCharge,g.throwCharge+dt);
  for(let i=g.thrownItems.length-1;i>=0;i--){
    const it=g.thrownItems[i];if(!it.flying)continue;let dx=it.tx-it.x,dy=it.ty-it.y,d=Math.hypot(dx,dy),travel=it.speed*dt;
    if(d<=travel){it.x=it.tx;it.y=it.ty;it.flying=false;if(handleThrowLanding(it))g.thrownItems.splice(i,1);else settleOnFloor(it);}
    else {it.x+=dx/d*travel;it.y+=dy/d*travel;}
  }
  const board=g.cuttingSurfaces.cutting1;
  if(k.f&&!g.isCharging&&findNearestStation(c)?.id==='cutting1'&&cutItem(board[0])){
    g.cutting.active=true;g.cutting.progress+=dt*workMult;
    if(g.cutting.progress+1e-8>=g.cutting.duration)finishProcess(g.cutting,board,cutItem);
  }else cancelCutting();
  for(const [process,layers,transform]of [[g.cooking,g.stoveSurfaces.stove1,cookItem],[g.frying,g.fryerSurface,item=>item==='potato_cut'?'fries':null]]){
    if(!process.active)continue;process.progress+=dt*workMult;
    if(process.progress+1e-8>=process.duration)finishProcess(process,layers,transform);
  }
  // 在同一 SVG 路径上推进并查找经过的座位，避免圆角、闭环和高速下漏送。
  const travel=g.beltSpeed*dt;g.beltP=(g.beltP+travel)%1;
  for(let i=g.beltItems.length-1;i>=0;i--){
    const plate=g.beltItems[i],old=plate.progress;
    let receiver=null,nearest=Infinity;
    for(const c of g.customers){if(c.state!=='waiting'||c.order!==plate.type)continue;const ahead=(c.progress-old+1)%1;if(ahead<=travel+1e-9&&ahead/g.beltSpeed<c.patience&&ahead<nearest){nearest=ahead;receiver=c;}}
    plate.progress=(old+travel)%1;
    if(receiver){receiver.state='eating';receiver.eatProgress=0;g.beltItems.splice(i,1);g.msg='顾客收到了'+ITEMS[receiver.order].name+'，正在享用。';}
  }
  for(let i=g.customers.length-1;i>=0;i--){
    const c=g.customers[i];
    if(c.state==='waiting'){c.patience-=dt;if(c.patience<=0){g.missed++;g.score=Math.max(0,g.score-5);g.customers.splice(i,1);g.msg='顾客等太久离开了，-5 分。';}}
    else {c.eatProgress+=dt/2;if(c.eatProgress>=1){g.served++;g.score+=15;g.customers.splice(i,1);g.msg='顾客吃完满意离开，+15 分！';}}
  }
  g.spawnTimer-=dt;if(g.spawnTimer<=0){spawn();g.spawnTimer=4+Math.random()*4;}
  g.kCD=Math.max(0,g.kCD-dt);g.spinoTimer=Math.max(0,g.spinoTimer-dt);
  if(powered){g.spinoTextTimer-=dt;if(g.spinoTextTimer<=0){g.spinoTexts.push({x:c.x+(Math.random()-.5)*30,y:c.y-c.r-10,timer:1});g.spinoTextTimer=.5;}}
  for(let i=g.spinoTexts.length-1;i>=0;i--){const text=g.spinoTexts[i];text.y-=40*dt;text.timer-=dt;if(text.timer<=0)g.spinoTexts.splice(i,1);}
  g.speech.timer=Math.max(0,g.speech.timer-dt);g.elapsed+=dt;g.timeLeft=Math.max(0,g.timeLeft-dt);
  if(g.timeLeft<1e-8)endRound('timeout');
}
function update(dt){
  if(!usable())return;
  let remaining=Math.min(Math.max(dt,0),g.timeLeft);
  while(remaining>1e-10&&g.running){let tick=Math.min(remaining,1/60);updateStep(tick);remaining-=tick;}
}
function syncBelt(){const slats=document.querySelector('.restaurant-map__slats');slats.style.animationDuration=240/(map.belt.length*g.beltSpeed)+'s';slats.style.animationPlayState=usable()?'running':'paused';}
function endRound(reason){
  if(!g.running)return;g.running=false;g.reason=reason;g.keys={};g.isCharging=false;g.throwCharge=0;cancelCutting();
  if(reason==='timeout')g.timeLeft=0;
  g.msg=reason==='quit'?'已退出本局，可点击「再开一局」重新开始。':'180 秒营业结束！';
  document.getElementById('round-overlay').hidden=false;document.getElementById('result-title').textContent=reason==='quit'?'已退出本局':'营业结束';
  document.getElementById('result-score').textContent='本局得分 '+g.score;
  document.getElementById('result-detail').textContent='完成 '+g.served+' 单 · 超时离开 '+g.missed+' 位 · 带上剩余 '+g.beltItems.length+' 份';syncBelt();syncHud();music.stop();
}
document.addEventListener('keydown',e=>{
  const key=e.key.toLowerCase();if(['INPUT','SELECT','TEXTAREA','BUTTON'].includes(e.target.tagName)&&key!=='escape')return;
  if(!['w','a','s','d','shift','e','f','q','j','escape'].includes(key))return;e.preventDefault();
  if(key==='escape'){endRound('quit');return;}if(!usable())return;
  music.unlock();
  const previous=g.keys[key];g.keys[key]=true;
  if(!previous&&!e.repeat){if(key==='e')interact();if(key==='f')startProcess();if(key==='j')useJ();if(key==='q'&&g.hasItem){g.isCharging=true;g.throwCharge=0;}}
});
document.addEventListener('keyup',e=>{const key=e.key.toLowerCase();if(Object.hasOwn(g.keys,key))g.keys[key]=false;if(key==='f')cancelCutting();if(key==='q'&&g.isCharging)doThrow();});
function suspendGame(){if(!g)return;g.keys={};g.isCharging=false;g.throwCharge=0;cancelCutting();g.suspended=true;syncBelt();music.sync();}
function resumeGame(){if(!g||document.hidden)return;g.suspended=false;lastTime=performance.now();syncBelt();music.sync();}
window.addEventListener('blur',suspendGame);
window.addEventListener('focus',resumeGame);
document.addEventListener('visibilitychange',()=>{if(document.hidden)suspendGame();else if(!document.hasFocus||document.hasFocus())resumeGame();});
document.getElementById('start-game').addEventListener('click',()=>{if(g.reason!=='ready')return;reset();canvas.focus();});
for(const id of ['restart','play-again'])document.getElementById(id).addEventListener('click',()=>{reset(g.reason!=='ready');if(g.running)canvas.focus();});
document.getElementById('exit').addEventListener('click',()=>endRound('quit'));
canvas.addEventListener('pointerdown',()=>canvas.focus());

// 缓存固定画面与小贴图，避免每帧重复执行大量路径和文字绘制。
var renderCache={food:new Map(),faces:new Map(),chef:new Map(),stations:new Map(),stationKey:''};
var hudElements={},hudValues={},orderUiElapsed=0,lastIdleFrame='';
var beltStroke=typeof Path2D!=='undefined'?new Path2D(document.getElementById('rm-belt-path').getAttribute('d')):null;
function resetRenderCaches(){renderCache={food:new Map(),faces:new Map(),chef:new Map(),stations:new Map(),stationKey:''};}
function rasterCanvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
function circle(c,x,y,r,color){c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();}
function box(c,x,y,w,h,r,fill,stroke){c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1.7;c.stroke();}}
function label(c,text,x,y,size=15,color='#70543d'){c.fillStyle=color;c.font='600 '+size+'px "Microsoft YaHei",sans-serif';c.textAlign='center';c.fillText(text,x,y);}
function drawIngredient(c,x,y,item,size=40){
  const type=ITEMS[item]?.art;if(!type)return;
  const art=window.TomatoArt.kinds.includes(type)?window.TomatoArt:window.BurgerArt.kinds.includes(type)?window.BurgerArt:window.FriesArt;
  art.draw(c,type,x,y,size);
}
function paintFood(c,x,y,item,scale=1){
  c.save();c.translate(x,y);c.scale(scale,scale);
  if(item==='fries'){
    c.fillStyle='#b3936630';c.beginPath();c.ellipse(0,25,22,7,0,0,Math.PI*2);c.fill();drawIngredient(c,0,-2,item,62);
  }else if(SERVABLE.includes(item)){
    c.fillStyle='#fff8e8';c.beginPath();c.ellipse(0,item==='burger'?13:5,29,20,0,0,Math.PI*2);c.fill();c.strokeStyle='#b5a181';c.lineWidth=2;c.stroke();
    drawIngredient(c,0,item==='burger'?-3:-1,item,item==='burger'?56:48);
  }else drawIngredient(c,0,0,item,40);
  c.restore();
}
function drawFood(c,x,y,item,scale=1){
  let sprite=renderCache.food.get(item);
  if(!sprite){sprite=rasterCanvas(192,192);const sc=sprite.getContext('2d');sc.scale(2,2);paintFood(sc,48,48,item);renderCache.food.set(item,sprite);}
  c.drawImage(sprite,x-48*scale,y-48*scale,96*scale,96*scale);
}
function paintCatFace(c,breed,expression='waiting'){
  c.save();c.translate(24,25);c.strokeStyle='#91775f';c.lineWidth=1.3;
  c.fillStyle=breed.ear;c.beginPath();c.moveTo(-12,-5);c.lineTo(-15,-20);c.lineTo(-4,-12);c.moveTo(12,-5);c.lineTo(15,-20);c.lineTo(4,-12);c.fill();c.stroke();
  circle(c,0,0,16,breed.body);c.beginPath();c.arc(0,0,16,0,Math.PI*2);c.stroke();
  if(breed.spots){circle(c,-6,-4,5,breed.spots[0]);circle(c,7,5,4,breed.spots[1]);}
  if(breed.face){c.fillStyle=breed.face;c.beginPath();c.ellipse(0,2,10,8,0,0,Math.PI*2);c.fill();}
  if(expression==='eating'){
    c.strokeStyle='#5c4b3f';c.lineWidth=1.8;
    for(const x of[-6,6]){c.beginPath();c.arc(x,-2,3,0,Math.PI);c.stroke();}
  }else {circle(c,-6,-2,2.5,'#51433a');circle(c,6,-2,2.5,'#51433a');circle(c,-6.7,-3,0.8,'#fff');circle(c,5.3,-3,0.8,'#fff');}
  circle(c,0,5,2,'#c99689');c.restore();
}
function drawCatFace(c,breed,expression='waiting'){
  const key=breed.name+':'+expression;let sprite=renderCache.faces.get(key);
  if(!sprite){sprite=rasterCanvas(96,96);const sc=sprite.getContext('2d');sc.scale(2,2);paintCatFace(sc,breed,expression);renderCache.faces.set(key,sprite);}
  c.drawImage(sprite,0,0,48,48);
}
function drawCustomer(customer){
  const c=customer,x=c.seat.x,y=c.seat.y;
  ctx.fillStyle='#9b795422';ctx.beginPath();ctx.ellipse(x,y+22,21,7,0,0,Math.PI*2);ctx.fill();
  ctx.save();ctx.translate(x-29,y-29);ctx.scale(1.2,1.2);drawCatFace(ctx,c.breed,c.state);ctx.restore();
  if(c.state==='waiting'){
    const p=Math.max(0,c.patience/c.maxP);
    box(ctx,x-23,y-42,46,5,2,'#e0d1b3');box(ctx,x-23,y-42,46*p,5,2,patienceColor(p));
    box(ctx,x+23,y-33,39,35,9,'#fffcf1','#d3bc96');drawFood(ctx,x+42,y-15,c.order,.53);
    label(ctx,'#'+(c.seat.id+1),x,y+37,12,'#9b805f');
  }else{
    const size=Math.max(0,1-c.eatProgress)*.8;
    if(size>.04)drawFood(ctx,x,y+34,c.order,size);
    if(c.eatProgress>.5){ctx.globalAlpha=Math.min(1,(c.eatProgress-.5)*2);label(ctx,'😊',x,y-39,22);ctx.globalAlpha=1;}
  }
}
function patienceColor(p){return p>.5?'#91aa75':p>.25?'#d9aa59':'#c97965';}
function drawBeltSlats(){
  // 只在 Canvas 中画运动的细分隔线，使整张餐厅 SVG 保持静态。
  if(!beltStroke)return;
  ctx.save();ctx.strokeStyle='#c5a173';ctx.globalAlpha=.33;ctx.lineWidth=47;ctx.lineJoin='round';ctx.setLineDash([2,22]);
  ctx.lineDashOffset=-(g.elapsed*map.belt.length*g.beltSpeed)%24;ctx.stroke(beltStroke);ctx.restore();
}
function processingBar(st,process){
  if(!process||(!process.active&&!(st.type==='cutting'&&process.progress>0)))return;
  const ratio=Math.min(1,process.progress/process.duration),y=st.y+51;
  box(ctx,st.x-31,y,62,6,3,'#e1d3b8');box(ctx,st.x-31,y,62*ratio,6,3,'#93a874');
  label(ctx,st.type==='cutting'?(process.active?'按住 F 切菜':'已暂停 · 按住 F'):'加工中',st.x,y+19,12,'#8b9769');
}
function drawStation(st,withProgress=true){
  ctx.save();ctx.translate(st.x,st.y);ctx.scale(st.scale,st.scale);
  if(st.type==='crate'){
    const meat=st.item==='meat_raw';
    box(ctx,-53,-30,106,53,8,meat?'#aab9af':'#c99f6b',meat?'#84988b':'#a78056');
    box(ctx,-48,-26,96,38,5,meat?'#e9e9d6':'#b58d5a');
    drawIngredient(ctx,-23,-7,st.item,39);drawIngredient(ctx,23,-7,st.item,39);
    if(st.item==='tomato_raw'||st.item==='potato_raw')drawIngredient(ctx,0,-4,st.item,43);
    box(ctx,-53,8,106,15,4,meat?'#c2cec0':'#e6c28d',meat?'#84988b':'#a78056');
  }else if(st.type==='cutting'){
    box(ctx,-51,-25,102,45,9,'#cfaa7b','#b68e64');box(ctx,-47,-22,94,37,7,'#e6c796');
    ctx.strokeStyle='#d4af7f';ctx.lineWidth=1;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-40,-17+i*10);ctx.lineTo(40,-17+i*10);ctx.stroke();}
    const item=g.cuttingSurfaces[st.id][0];if(item)drawIngredient(ctx,-6,-5,item,50);
    ctx.save();ctx.translate(31,-6);ctx.rotate(-.15);box(ctx,-5,-19,13,25,2,'#e8e9dd','#acb6a7');box(ctx,-3,6,8,15,3,'#a27652');ctx.restore();
  }else if(st.type==='stove'){
    box(ctx,-51,-27,102,49,8,'#87908a','#6c766e');box(ctx,-46,-23,92,37,6,'#bbc0af');circle(ctx,0,-1,25,g.cooking.active?'#e1ac67':'#8e9b8d');
    box(ctx,-49,-6,17,10,4,'#767f73');box(ctx,32,-6,17,10,4,'#767f73');
    ctx.fillStyle='#718073';ctx.beginPath();ctx.ellipse(0,2,37,23,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#f0dfb9';ctx.beginPath();ctx.ellipse(0,-4,36,22,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#586b5c';ctx.lineWidth=3;ctx.stroke();
    const item=g.stoveSurfaces[st.id][0];if(item)drawIngredient(ctx,0,-7,item,60);
    if(g.cooking.active){ctx.strokeStyle='#baa37fa0';ctx.lineWidth=2;for(let i=-1;i<=1;i++){ctx.beginPath();ctx.moveTo(i*14,-31);ctx.bezierCurveTo(i*14-6,-38,i*14+6,-42,i*14,-49);ctx.stroke();}}
  }else if(st.type==='fryer'){
    box(ctx,-53,-32,106,65,9,'#8c9c91','#6e8175');box(ctx,-44,-25,88,45,6,'#e4cf92','#9c895a');
    ctx.strokeStyle='#c0a76c';ctx.lineWidth=1.5;for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(-36+i*14,-21);ctx.lineTo(-36+i*14,16);ctx.stroke();}
    box(ctx,-12,22,24,17,4,'#6e8175');
    if(g.fryerSurface[0])drawIngredient(ctx,0,-5,g.fryerSurface[0],48);
    if(g.frying.active)for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(-29+i*14,-12+Math.sin(g.elapsed*7+i)*5,3,0,Math.PI*2);ctx.strokeStyle='#fff0bd';ctx.lineWidth=2;ctx.stroke();}
  }else if(st.type==='surface'){
    box(ctx,-51,-26,102,50,9,'#d7ba88','#b2966f');box(ctx,-47,-22,94,39,7,'#fff3d6');
    const layers=g.surfaces[st.id];
    if(layers.length===1)drawFood(ctx,0,-3,layers[0],.9);
    else for(let i=0;i<layers.length;i++)drawFood(ctx,(i-(layers.length-1)/2)*30,-3,layers[i],.54);
  }else if(st.type==='plate'){
    ctx.fillStyle='#fffdfa';ctx.beginPath();ctx.ellipse(0,-4,24,15,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#c1af91';ctx.lineWidth=2;ctx.stroke();
    ctx.strokeStyle='#93a875';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,10);ctx.lineTo(0,25);ctx.lineTo(-5,20);ctx.moveTo(0,25);ctx.lineTo(5,20);ctx.stroke();
  }else if(st.type==='trash'){
    box(ctx,-23,-25,46,47,6,'#a9b6a0','#85927d');box(ctx,-27,-31,54,10,4,'#c7cfb5','#85927d');box(ctx,-8,-37,16,6,3,'#a9b6a0');
    ctx.strokeStyle='#e6ebd9';ctx.lineWidth=3;for(const x of[-12,0,12]){ctx.beginPath();ctx.moveTo(x,-13);ctx.lineTo(x,12);ctx.stroke();}
  }
  ctx.restore();
  const bottom=st.y>580,labelY=bottom?st.y-29:st.y+43;
  label(ctx,st.label+(st.type==='crate'?' · E':st.type==='plate'?' · E':''),st.x,labelY,st.scale<.7?13:14,st.type==='plate'?'#7e9865':'#70543d');
  if(st.type==='cutting'||st.type==='stove'||st.type==='fryer'){
    const process=processFor(st);if(process.active||(st.type==='cutting'&&process.progress>0)){if(withProgress)processingBar(st,process);}else label(ctx,st.type==='cutting'?'E 放取 · 按住 F':'E 放入 · 自动加工',st.x,labelY+17,11,'#9e8262');
  }else if(st.type==='surface')label(ctx,'E 放取 · '+g.surfaces[st.id].length+'/3',st.x,st.y+43,11,'#8b996b');
}
function drawStationsCached(){
  const key=[g.cuttingSurfaces.cutting1.join(','),g.stoveSurfaces.stove1.join(','),g.fryerSurface.join(','),g.cutting.active,g.cooking.active,g.frying.active,...Object.values(g.surfaces).map(a=>a.join(','))].join('|');
  for(const st of stationList){
    const layers=surfaceFor(st),process=processFor(st),content=(layers?layers.join(','):'')+'|'+!!process?.active+'|'+(st.type==='cutting'&&process.progress>0);
    let cached=renderCache.stations.get(st.id);
    if(!cached){cached={sprite:rasterCanvas(160,144),key:null};renderCache.stations.set(st.id,cached);}
    if(cached.key!==content){
      const target=cached.sprite.getContext('2d'),screen=ctx;
      target.clearRect(0,0,160,144);target.save();target.translate(80-st.x,60-st.y);ctx=target;
      try{drawStation(st,false);}finally{ctx=screen;target.restore();}
      cached.key=content;
    }
    ctx.drawImage(cached.sprite,st.x-80,st.y-60);
  }
  renderCache.stationKey=key;
  if(g.cutting.active||g.cutting.progress>0)processingBar(g.stations.cutting1,g.cutting);
  if(g.cooking.active)processingBar(g.stations.stove1,g.cooking);
  if(g.frying.active)processingBar(g.stations.fryer,g.frying);
}
function drawChefSprite(x,y,holding){
  const image=holding&&window.ChefArt.holdingImage?window.ChefArt.holdingImage:window.ChefArt.image;
  if(!image)return false;
  let cached=renderCache.chef.get(holding);
  if(!cached||cached.image!==image){
    const sprite=rasterCanvas(256,288),sc=sprite.getContext('2d');sc.scale(2,2);window.ChefArt.draw(sc,64,80,98,holding);
    cached={image,sprite};renderCache.chef.set(holding,cached);
  }
  ctx.drawImage(cached.sprite,x-64,y-80,128,144);return true;
}
function drawChef(){
  const x=g.cat.x,y=g.cat.y;
  if(g.spinoTimer>0){
    ctx.save();ctx.strokeStyle='#e6a64e';ctx.lineWidth=3;ctx.globalAlpha=.65+.2*Math.sin(g.elapsed*9);
    ctx.beginPath();ctx.ellipse(x,y+24,34,12,0,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle='#db805b';ctx.beginPath();ctx.moveTo(x-26,y+5);ctx.lineTo(x-33,y-17);ctx.lineTo(x-20,y-11);ctx.lineTo(x,y-57);ctx.lineTo(x+20,y-11);ctx.lineTo(x+33,y-17);ctx.lineTo(x+26,y+5);ctx.fill();ctx.restore();
  }
  ctx.fillStyle='#886b4b25';ctx.beginPath();ctx.ellipse(x,y+25,23,8,0,0,Math.PI*2);ctx.fill();
  if(!drawChefSprite(x,y,!!g.hasItem)){
    ctx.save();ctx.translate(x-24,y-25);drawCatFace(ctx,BREEDS[2]);ctx.restore();
  }
  if(g.hasItem){
    window.ChefArt.drawHoldingArms(ctx,x,y);
    if(SERVABLE.includes(g.hasItem))drawFood(ctx,x,y+29,g.hasItem,g.hasItem==='fries'?.52:.64);
    else drawIngredient(ctx,x,y+29,g.hasItem,g.hasItem==='tomato_raw'?31:35);
    window.ChefArt.drawHoldingPaws(ctx,x,y);
  }
  if(g.isCharging){
    const p=g.throwCharge/g.maxCharge,y0=y-82;
    box(ctx,x-31,y0,62,7,3,'#d9cbae');box(ctx,x-31,y0,62*p,7,3,p>.8?'#c97965':p>.5?'#d9aa59':'#91aa75');
    label(ctx,'松开 Q 投掷',x,y0-8,13,'#8b704d');
    const b=map.kitchenBounds,dist=g.minThrowDist+(g.maxThrowDist-g.minThrowDist)*p;
    const tx=Math.max(b.x+15,Math.min(b.x+b.width-15,x+g.cat.dirX*dist)),ty=Math.max(b.y+15,Math.min(b.y+b.height-15,y+g.cat.dirY*dist));
    ctx.strokeStyle='#c0a15b90';ctx.lineWidth=2;ctx.setLineDash([5,5]);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(tx,ty);ctx.stroke();ctx.setLineDash([]);ctx.beginPath();ctx.arc(tx,ty,9,0,Math.PI*2);ctx.stroke();
  }
}
function draw(){
  ctx.clearRect(0,0,W,H);
  drawBeltSlats();
  const active=findNearestStation(g.cat);
  if(active&&g.running){ctx.strokeStyle='#bba451';ctx.lineWidth=3;ctx.setLineDash([6,4]);ctx.strokeRect(active.x-active.w/2-3,active.y+active.topOffset-3,active.w+6,active.h+6);ctx.setLineDash([]);}
  drawStationsCached();
  for(const item of g.thrownItems){
    let height=0;if(item.flying){let remaining=Math.hypot(item.tx-item.x,item.ty-item.y);height=Math.sin((1-remaining/(item.total||1))*Math.PI)*30;}
    ctx.fillStyle='#99784b22';ctx.beginPath();ctx.ellipse(item.x,item.y+8,14,5,0,0,Math.PI*2);ctx.fill();drawFood(ctx,item.x,item.y-height,item.item,.64);
  }
  for(const plate of g.beltItems){const p=beltPos(plate.progress);drawFood(ctx,p.x,p.y,plate.type,.95);}
  for(const customer of g.customers)drawCustomer(customer);
  drawChef();
  for(const text of g.spinoTexts){ctx.save();ctx.globalAlpha=Math.max(0,text.timer);label(ctx,'内阁',text.x,text.y,15,'#c98b2e');ctx.restore();}
  if(active&&g.running&&!g.isCharging&&!g.suspended){
    let hint=active.type==='crate'?'E 拿取':active.type==='plate'?'E 上菜':active.type==='trash'?'E 丢弃':active.type==='surface'?'E 放取 / 合成':active.type==='cutting'?'E 放取 · 按住 F 切菜':'E 放入 · 自动加工';
    label(ctx,hint,g.cat.x,g.cat.y-76,14,'#937232');
  }
  if(g.speech.timer>0&&!g.isCharging){ctx.globalAlpha=Math.min(1,g.speech.timer);box(ctx,g.cat.x-73,g.cat.y-112,146,26,12,'#fffbef','#d5bd97');label(ctx,g.speech.text,g.cat.x,g.cat.y-94,13);ctx.globalAlpha=1;}
  if(g.suspended&&g.running){box(ctx,470,430,500,78,18,'#fff8e8ee','#d5bd97');label(ctx,'已暂停 · 切回游戏窗口后继续',720,478,22);}
}
function syncHud(){
  const values={score:g.score,time:Math.ceil(g.timeLeft),served:g.served,hand:g.hasItem?ITEMS[g.hasItem].name:'空',skill:g.spinoTimer>0?'脊背龙 · 剩余 '+Math.ceil(g.spinoTimer)+' 秒':g.kCD>0?'J · 冷却 '+Math.ceil(g.kCD)+' 秒':'J · 脊背龙可用',message:g.suspended&&g.running?'游戏已暂停，切回窗口后继续。':g.msg};
  for(const id in values)if(hudValues[id]!==values[id]){(hudElements[id]||=(document.getElementById(id))).textContent=values[id];hudValues[id]=values[id];}
  const urgent=g.timeLeft<=15;if(hudValues.urgent!==urgent){(hudElements.time||=document.getElementById('time')).classList.toggle('urgent',urgent);hudValues.urgent=urgent;}
}
var ticketNodes=new Map();
function clearOrderTickets(){document.getElementById('orders').replaceChildren();ticketNodes.clear();}
function syncOrders(){
  const root=document.getElementById('orders'),waiting=g.customers.filter(c=>c.state==='waiting'),ids=new Set(waiting.map(c=>c.id));
  for(const [id,ticket]of ticketNodes)if(!ids.has(id)){ticket.node.remove();ticketNodes.delete(id);}
  for(const customer of waiting){
    let ticket=ticketNodes.get(customer.id);
    if(!ticket){
      const node=document.createElement('div');node.className='order-ticket';
      const face=document.createElement('canvas');face.width=48;face.height=48;drawCatFace(face.getContext('2d'),customer.breed);node.appendChild(face);
      const food=document.createElement('canvas');food.width=48;food.height=48;drawFood(food.getContext('2d'),24,24,customer.order,.67);node.appendChild(food);
      const info=document.createElement('div');info.className='order-info';const name=document.createElement('div');name.className='order-name';name.textContent=ITEMS[customer.order].name;info.appendChild(name);
      const bar=document.createElement('div');bar.className='order-patience';const fill=document.createElement('div');bar.appendChild(fill);info.appendChild(bar);
      const seat=document.createElement('div');seat.className='order-seat';seat.textContent='座位 '+(customer.seat.id+1);info.appendChild(seat);node.appendChild(info);root.appendChild(node);
      ticket={node,fill};ticketNodes.set(customer.id,ticket);
    }
    const p=Math.round(Math.max(0,customer.patience/customer.maxP)*1000)/1000,color=patienceColor(p);
    if(ticket.patience!==p){ticket.fill.style.transform='scaleX('+p+')';ticket.patience=p;}
    if(ticket.color!==color){ticket.fill.style.background=color;ticket.color=color;}
  }
}
function frame(now){
  const dt=Math.max(0,(now-lastTime)/1000);lastTime=now;update(dt);
  const idleKey=g.running+':'+g.suspended+':'+g.hasItem+':'+!!window.ChefArt.image;
  if(usable()||idleKey!==lastIdleFrame)draw();lastIdleFrame=idleKey;
  syncHud();orderUiElapsed+=dt;
  if(orderUiElapsed>=.1){syncOrders();orderUiElapsed=0;}
  requestAnimationFrame(frame);
}
reset(false);draw();requestAnimationFrame(frame);
