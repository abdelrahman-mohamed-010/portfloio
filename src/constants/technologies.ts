
interface technologiesProps {
  name: string;
  icon: string;
}

const technologies: technologiesProps[] = [
  {
    name: "Python",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzMzNzZBQiIgZD0iTTExLjc1MSAwYy0xLjA5NSAwLTIuMTQ0LjA5OC0zLjA2NS4yOGMtMi43MTQuNTQtMy4yMDMgMS42NjgtMy4yMDMgMy43NXYyLjc0OGg2LjQwNnYuODFINC4wMThjLTIuMDk0IDAtMy45MjggMS4yNi00LjUgMy42NTQtLjY2MiAyLjc1Ny0uNjkyIDQuNDc3IDAgNy4zNjEuNTEzIDIuMTQ3IDEuNzM3IDMuNjU0IDMuODMxIDMuNjU0aDIuNDh2LTMuMjk3YzAtMi4zODIgMi4wNjItNC4zMTMgNC40OC00LjMxM2g2LjM4OWMyIDAgMy42MDUtMS42MzggMy42MDUtMy42Mzl2LTYuODI2YzAtMS45NC0xLjYzNi0zLjQtMy42MDUtMy43MjYtMS4yNDctLjIwNy0yLjUzOC0uMy0zLjg0Ny0uM3ptLTMuNDcgMi4xNTJjLjY2MiAwIDEuMjAzLjU1IDEuMjAzIDEuMjI3IDAgLjY3NC0uNTQgMS4yMi0xLjIwMyAxLjIycy0xLjIwMy0uNTQ2LTEuMjAzLTEuMjJjMC0uNjc3LjU0LTEuMjI3IDEuMjAzLTEuMjI3eiIvPjxwYXRoIGZpbGw9IiNmZmQ0M2IiIGQ9Ik0xMi4yNSAyMy45OTljMS4wOTUgMCAyLjE0NC0uMDk4IDMuMDY1LS4yOCAyLjcxNC0uNTQgMy4yMDMtMS42NjggMy4yMDMtMy43NXYtMi43NDhoLTYuNDA2di0uODFoOS41ODJjMi4wOTQgMCAzLjkyOC0xLjI2IDQuNS0zLjY1NC42NjItMi43NTcuNjkyLTQuNDc3IDAtNy4zNjEtLjUxMy0yLjE0Ny0xLjczNy0zLjY1NC0zLjgzMS0zLjY1NGgtMi40OHYzLjI5N2MwIDIuMzgyLTIuMDYyIDQuMzEzLTQuNDggNC4zMTNoLTYuMzg5Yy0yIDAtMy42MDUgMS42MzgtMy42MDUgMy42Mzl2Ni44MjZjMCAxLjk0IDEuNjM2IDMuNCAzLjYwNSAzLjcyNiAxLjI0Ny4yMDcgMi41MzguMyAzLjg0Ny4zem0zLjQ3LTIuMTUyYy0uNjYyIDAtMS4yMDMtLjU1LTEuMjAzLTEuMjI3IDAtLjY3NC41NC0xLjIyIDEuMjAzLTEuMjJzMS4yMDMuNTQ2IDEuMjAzIDEuMjJjMCAuNjc3LS41NCAxLjIyNy0xLjIwMyAxLjIyN3oiLz48L3N2Zz4=",
  },
  {
    name: "TensorFlow",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0U2NTEwMCIgZD0iTTEuMjkzIDExLjI5M2gxMC4yODV2MTAuMjg1aC0xMC4yODV6Ii8+PHBhdGggZmlsbD0iI0VBNjkwMCIgZD0iTTEyLjQyMiAwaDEwLjI4NXYxMC4yODVoLTEwLjI4NXoiLz48cGF0aCBmaWxsPSIjRkY3MDAwIiBkPSJNMS4yOTMgMGgxMC4yODV2MTAuMjg1aC0xMC4yODV6Ii8+PHBhdGggZmlsbD0iI0Y4NzUwMCIgZD0iTTEyLjQyMiAxMS4yOTNoMTAuMjg1djEwLjI4NWgtMTAuMjg1eiIvPjwvc3ZnPg==",
  },
  {
    name: "PyTorch",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0VFNEMyOCIgZD0iTTEyLjAwNSAwTDQuOTUyIDcuMDUzYTExLjE5MyAxMS4xOTMgMCAwMC0uNzQgMS40MDhjLS4xNjUuMzc0LS4zLjc2NC0uNDAzIDEuMTY4LS4yNzYuOTg1LS4zNzIgMi4wMS0uMjgyIDMuMDIyLjA5IDEuMDEyLjM2NiAxLjk5Ni44MTUgMi45MDUuNDUuOTA5IDEuMDU1IDEuNzMgMS44MDcgMi40MTdzMS42MjIgMS4yMyAyLjU3IDEuNTc3Yy45NDcuMzQ4IDEuOTU2LjUxIDIuOTY2LjQ3OGE4LjE3NiA4LjE3NiAwIDAwMi45NTctLjUzNyA4LjQ0NSA4LjQ0NSAwIDAwMi41MjQtMS41NThsNS4xMi01LjEyTDEyLjAwNCAweiIvPjxjaXJjbGUgZmlsbD0iI0VFNEMyOCIgY3g9IjE2LjIyNCIgY3k9IjcuODYiIHI9IjEuOTgyIi8+PC9zdmc+",
  },
  {
    name: "LangChain",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwQjVEOCIgZD0iTTEyIDJsOS4xOTMgNS4zNDV2OS4zMUwxMiAyMmwtOS4xOTMtNS4zNDV2LTkuMzFMMTIgMnptMCAyLjA2NEw0LjQ5NCA4LjA2NHY3Ljg3MkwxMiAxOS45MzZsNy41MDYtNHYtNy44NzJMMTIgNC4wNjR6Ii8+PHBhdGggZmlsbD0iIzAwQjVEOCIgZD0iTTEyIDUuODk0bDUuNTA2IDMuMTd2Ni4zMzZMMTIgMTguNTdsLTUuNTA2LTMuMTdWOS4wNjRMMTIgNS44OTR6TTEyIDhsLTIuNzUzIDEuNTg1djMuMTY4TDEyIDE0LjMzOGwyLjc1My0xLjU4NVY5LjU4NUwxMiA4eiIvPjwvc3ZnPg==",
  },
  {
    name: "HuggingFace",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGQjdBMyIgZD0iTTExLjQ3OCAyLjExNWMtLjMyOC40MTgtLjUyMy45NDYtLjUyMyAxLjUxOSAwIC41NzQuMTk1IDEuMTAyLjUyMyAxLjUyLjMyOC40MTguODI4LjY3IDEuMzY2LjY3LjUzNyAwIDEuMDM3LS4yNTIgMS4zNjUtLjY3LjMyOC0uNDE4LjUyMy0uOTQ2LjUyMy0xLjUyIDAtLjU3My0uMTk1LTEuMTAxLS41MjMtMS41MTktLjMyOC0uNDE4LS44MjgtLjY3LTEuMzY1LS42Ny0uNTM4IDAtMS4wMzguMjUyLTEuMzY2LjY3ek0xMi4wMiA3LjIyYy00LjE1IDAtNy41MTcgMy4yNDUtNy41MTcgNy4yNDYgMCA0LjAwMiAzLjM2NiA3LjI0NiA3LjUxNyA3LjI0NnM3LjUxNy0zLjI0NCA3LjUxNy03LjI0NmMwLTQuMDAxLTMuMzY3LTcuMjQ2LTcuNTE3LTcuMjQ2em0wIDExLjc3M2MtMi42MTQgMC00LjczNC0yLjAyNS00LjczNC00LjUyNyAwLTIuNTAyIDIuMTItNC41MjcgNC43MzQtNC41MjdzNC43MzQgMi4wMjUgNC43MzQgNC41MjdjMCAyLjUwMi0yLjEyIDQuNTI3LTQuNzM0IDQuNTI3eiIvPjwvc3ZnPg==",
  },
  {
    name: "OpenAI",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTIyLjI4MiAxMS43ODZjLjI0OS0uOTU5LjM5LTEuOTUyLjM5LTIuOTM4IDAtMy4yNjQtMi4zNy02LjE3My01LjYzMi03LjMxNi0xLjAwOC0uMzU0LTIuMDc0LS41MzItMy4xNTUtLjUzMi0yLjM0OCAwLTQuNTIzLjg3OC02LjE5NCAyLjMzMS0xLjY3MiAxLjQ1NC0yLjc5NiAzLjQ1NS0zLjE1NSA1LjY3Ny0uMjQ5Ljk1OS0uMzkgMS45NTItLjM5IDIuOTM4IDAgMy4yNjQgMi4zNyA2LjE3MyA1LjYzMiA3LjMxNiAxLjAwOC4zNTQgMi4wNzQuNTMyIDMuMTU1LjUzMiAyLjM0OCAwIDQuNTIzLS44NzggNi4xOTQtMi4zMzEgMS42NzItMS40NTQgMi43OTYtMy40NTUgMy4xNTUtNS42Nzd6bS0xMC45MDYgNS42MzFjLTEuMTI3IDAtMi4yMS0uMTc4LTMuMjI1LS41MzItMi45NjEtMS4wMzItNS4wODUtMy43NTEtNS4wODUtNi45NDcgMC0uOTI4LjE0MS0xLjg2NS4zOS0yLjc3My4zMzktMi4xMSAxLjM4LTMuOTk5IDIuOTMxLTUuMzUxIDEuNTUyLTEuMzUyIDMuNTQ3LTIuMDk5IDUuNzA0LTIuMDk5Ljk4NyAwIDEuOTUzLjE3OCAyLjg3LjQ3MyAyLjk2MSAxLjAzMiA1LjA4NSAzLjc1MSA1LjA4NSA2Ljk0NyAwIC45MjgtLjE0MSAxLjg2NS0uMzkgMi43NzMtLjMzOSAyLjExLTEuMzggMy45OTktMi45MzEgNS4zNTEtMS41NTIgMS4zNTItMy41NDcgMi4wOTktNS43MDQgMi4wOTl6Ii8+PC9zdmc+",
  },
];

export default technologies;
