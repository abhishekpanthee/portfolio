import React from 'react';
import GitHubCalendar from 'react-github-calendar';

type GithubCalendarProps = {
  username: string;
};

const GithubCalendar: React.FC<GithubCalendarProps> = ({ username }) => {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold mb-4">GitHub Contributions</h2>
        <div className="w-full max-w-3xl mx-auto"> {/* Center container */}
          <GitHubCalendar username={username} />
        </div>
      </div>
    );
  };
  
export default GithubCalendar;
