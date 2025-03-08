# GSynergy React Challenge

## Project Setup & Installation

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/ritik-git/GS060820_Ritik_Galgate
   ```
2. Navigate to the project folder:
   ```sh
   cd GS060820_Ritik_Galgate
   ```
3. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
4. Start the development server:
   ```sh
   npm start  # or yarn start
   ```

## Deployment
The application is deployed on Firebase:
🔗 [Live App](https://gs060820-ritik-galgate.web.app/)

## CI/CD Setup
- Implemented GitHub Actions for CI/CD.
- On push to the `main` branch, the pipeline:
  - Runs linting and tests.
  - Builds the project.
  - Deploys the project to Firebase.

## Features Implemented
- **Authentication**
  - Login credentials:
    - **Email**: ritikgalgate38@gmail.com
    - **Password**: 1234
- **State Management**
  - Used Redux for global state management.
- **AG-Grid Implementation**
  - Editable grid for data input.
  - Conditional formatting for GM% based on given criteria.
- **Charting**
  - Implemented using Recharts.
- **Responsive Design**
  - Minimum width of 1080px.
- **Error Handling & Logging**
  - Implemented error boundaries and console logging.

## Possible Improvements
If given 4 more hours, I would:
1. **Add Unit Tests**
   - Implement Jest tests for Redux and key components.
2. **Improve UI/UX**
   - Add animations and better styling for a smoother experience.
3. **Optimize Performance**
   - Lazy load components and optimize API calls.
4. **Enhance Security**
   - Implement Firebase authentication with proper roles.

## Feedback
The challenge was well-structured and engaging. Providing a sample API instead of XLSX for data import would improve the workflow.

---
Feel free to reach out for any clarifications!
