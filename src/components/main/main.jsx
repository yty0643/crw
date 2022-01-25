import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import RepoList from "../repo_list/repo_list";

const Main = ({ authService, githubService }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [user, setUser] = useState(navigateState && navigateState.userId);
  const [repositories, setRepoitories] = useState([
    {
      id: 347724257,
      node_id: "MDEwOlJlcG9zaXRvcnkzNDc3MjQyNTc=",
      name: "FireEvacuationSimulation",
      full_name: "SoftwareProjectMiJeong/FireEvacuationSimulation",
      private: true,
      owner: {
        login: "SoftwareProjectMiJeong",
        id: 80641490,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjgwNjQxNDkw",
        avatar_url: "https://avatars.githubusercontent.com/u/80641490?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/SoftwareProjectMiJeong",
        html_url: "https://github.com/SoftwareProjectMiJeong",
        followers_url:
          "https://api.github.com/users/SoftwareProjectMiJeong/followers",
        following_url:
          "https://api.github.com/users/SoftwareProjectMiJeong/following{/other_user}",
        gists_url:
          "https://api.github.com/users/SoftwareProjectMiJeong/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/SoftwareProjectMiJeong/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/SoftwareProjectMiJeong/subscriptions",
        organizations_url:
          "https://api.github.com/users/SoftwareProjectMiJeong/orgs",
        repos_url: "https://api.github.com/users/SoftwareProjectMiJeong/repos",
        events_url:
          "https://api.github.com/users/SoftwareProjectMiJeong/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/SoftwareProjectMiJeong/received_events",
        type: "Organization",
        site_admin: false,
      },
      html_url:
        "https://github.com/SoftwareProjectMiJeong/FireEvacuationSimulation",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation",
      forks_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/forks",
      keys_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/teams",
      hooks_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/hooks",
      issue_events_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/events",
      assignees_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/tags",
      blobs_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/languages",
      stargazers_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/stargazers",
      contributors_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/contributors",
      subscribers_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/subscribers",
      subscription_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/subscription",
      commits_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/merges",
      archive_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/downloads",
      issues_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/labels{/name}",
      releases_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/SoftwareProjectMiJeong/FireEvacuationSimulation/deployments",
      created_at: "2021-03-14T18:47:51Z",
      updated_at: "2021-03-16T03:04:31Z",
      pushed_at: "2021-03-16T03:04:29Z",
      git_url:
        "git://github.com/SoftwareProjectMiJeong/FireEvacuationSimulation.git",
      ssh_url:
        "git@github.com:SoftwareProjectMiJeong/FireEvacuationSimulation.git",
      clone_url:
        "https://github.com/SoftwareProjectMiJeong/FireEvacuationSimulation.git",
      svn_url:
        "https://github.com/SoftwareProjectMiJeong/FireEvacuationSimulation",
      homepage: null,
      size: 44,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: false,
      is_template: false,
      topics: [],
      visibility: "private",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
      permissions: {
        admin: true,
        maintain: true,
        push: true,
        triage: true,
        pull: true,
      },
    },
    {
      id: 449716584,
      node_id: "R_kgDOGs4haA",
      name: "algorithm",
      full_name: "yty0643/algorithm",
      private: false,
      owner: {
        login: "yty0643",
        id: 80657819,
        node_id: "MDQ6VXNlcjgwNjU3ODE5",
        avatar_url: "https://avatars.githubusercontent.com/u/80657819?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yty0643",
        html_url: "https://github.com/yty0643",
        followers_url: "https://api.github.com/users/yty0643/followers",
        following_url:
          "https://api.github.com/users/yty0643/following{/other_user}",
        gists_url: "https://api.github.com/users/yty0643/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yty0643/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yty0643/subscriptions",
        organizations_url: "https://api.github.com/users/yty0643/orgs",
        repos_url: "https://api.github.com/users/yty0643/repos",
        events_url: "https://api.github.com/users/yty0643/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yty0643/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/yty0643/algorithm",
      description: "algorithm",
      fork: false,
      url: "https://api.github.com/repos/yty0643/algorithm",
      forks_url: "https://api.github.com/repos/yty0643/algorithm/forks",
      keys_url: "https://api.github.com/repos/yty0643/algorithm/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/yty0643/algorithm/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/yty0643/algorithm/teams",
      hooks_url: "https://api.github.com/repos/yty0643/algorithm/hooks",
      issue_events_url:
        "https://api.github.com/repos/yty0643/algorithm/issues/events{/number}",
      events_url: "https://api.github.com/repos/yty0643/algorithm/events",
      assignees_url:
        "https://api.github.com/repos/yty0643/algorithm/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/yty0643/algorithm/branches{/branch}",
      tags_url: "https://api.github.com/repos/yty0643/algorithm/tags",
      blobs_url:
        "https://api.github.com/repos/yty0643/algorithm/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/yty0643/algorithm/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/yty0643/algorithm/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/yty0643/algorithm/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/yty0643/algorithm/statuses/{sha}",
      languages_url: "https://api.github.com/repos/yty0643/algorithm/languages",
      stargazers_url:
        "https://api.github.com/repos/yty0643/algorithm/stargazers",
      contributors_url:
        "https://api.github.com/repos/yty0643/algorithm/contributors",
      subscribers_url:
        "https://api.github.com/repos/yty0643/algorithm/subscribers",
      subscription_url:
        "https://api.github.com/repos/yty0643/algorithm/subscription",
      commits_url:
        "https://api.github.com/repos/yty0643/algorithm/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/yty0643/algorithm/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/yty0643/algorithm/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/yty0643/algorithm/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/yty0643/algorithm/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/yty0643/algorithm/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/yty0643/algorithm/merges",
      archive_url:
        "https://api.github.com/repos/yty0643/algorithm/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/yty0643/algorithm/downloads",
      issues_url:
        "https://api.github.com/repos/yty0643/algorithm/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/yty0643/algorithm/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/yty0643/algorithm/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/yty0643/algorithm/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/yty0643/algorithm/labels{/name}",
      releases_url:
        "https://api.github.com/repos/yty0643/algorithm/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/yty0643/algorithm/deployments",
      created_at: "2022-01-19T14:06:49Z",
      updated_at: "2022-01-19T14:06:49Z",
      pushed_at: "2022-01-19T14:06:50Z",
      git_url: "git://github.com/yty0643/algorithm.git",
      ssh_url: "git@github.com:yty0643/algorithm.git",
      clone_url: "https://github.com/yty0643/algorithm.git",
      svn_url: "https://github.com/yty0643/algorithm",
      homepage: null,
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
      permissions: {
        admin: true,
        maintain: true,
        push: true,
        triage: true,
        pull: true,
      },
    },
    {
      id: 447500372,
      node_id: "R_kgDOGqxQVA",
      name: "card-maker",
      full_name: "yty0643/card-maker",
      private: true,
      owner: {
        login: "yty0643",
        id: 80657819,
        node_id: "MDQ6VXNlcjgwNjU3ODE5",
        avatar_url: "https://avatars.githubusercontent.com/u/80657819?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yty0643",
        html_url: "https://github.com/yty0643",
        followers_url: "https://api.github.com/users/yty0643/followers",
        following_url:
          "https://api.github.com/users/yty0643/following{/other_user}",
        gists_url: "https://api.github.com/users/yty0643/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yty0643/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yty0643/subscriptions",
        organizations_url: "https://api.github.com/users/yty0643/orgs",
        repos_url: "https://api.github.com/users/yty0643/repos",
        events_url: "https://api.github.com/users/yty0643/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yty0643/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/yty0643/card-maker",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/yty0643/card-maker",
      forks_url: "https://api.github.com/repos/yty0643/card-maker/forks",
      keys_url: "https://api.github.com/repos/yty0643/card-maker/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/yty0643/card-maker/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/yty0643/card-maker/teams",
      hooks_url: "https://api.github.com/repos/yty0643/card-maker/hooks",
      issue_events_url:
        "https://api.github.com/repos/yty0643/card-maker/issues/events{/number}",
      events_url: "https://api.github.com/repos/yty0643/card-maker/events",
      assignees_url:
        "https://api.github.com/repos/yty0643/card-maker/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/yty0643/card-maker/branches{/branch}",
      tags_url: "https://api.github.com/repos/yty0643/card-maker/tags",
      blobs_url:
        "https://api.github.com/repos/yty0643/card-maker/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/yty0643/card-maker/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/yty0643/card-maker/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/yty0643/card-maker/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/yty0643/card-maker/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/yty0643/card-maker/languages",
      stargazers_url:
        "https://api.github.com/repos/yty0643/card-maker/stargazers",
      contributors_url:
        "https://api.github.com/repos/yty0643/card-maker/contributors",
      subscribers_url:
        "https://api.github.com/repos/yty0643/card-maker/subscribers",
      subscription_url:
        "https://api.github.com/repos/yty0643/card-maker/subscription",
      commits_url:
        "https://api.github.com/repos/yty0643/card-maker/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/yty0643/card-maker/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/yty0643/card-maker/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/yty0643/card-maker/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/yty0643/card-maker/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/yty0643/card-maker/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/yty0643/card-maker/merges",
      archive_url:
        "https://api.github.com/repos/yty0643/card-maker/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/yty0643/card-maker/downloads",
      issues_url:
        "https://api.github.com/repos/yty0643/card-maker/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/yty0643/card-maker/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/yty0643/card-maker/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/yty0643/card-maker/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/yty0643/card-maker/labels{/name}",
      releases_url:
        "https://api.github.com/repos/yty0643/card-maker/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/yty0643/card-maker/deployments",
      created_at: "2022-01-13T07:13:47Z",
      updated_at: "2022-01-13T07:14:41Z",
      pushed_at: "2022-01-17T06:56:26Z",
      git_url: "git://github.com/yty0643/card-maker.git",
      ssh_url: "git@github.com:yty0643/card-maker.git",
      clone_url: "https://github.com/yty0643/card-maker.git",
      svn_url: "https://github.com/yty0643/card-maker",
      homepage: null,
      size: 558,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "private",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
      permissions: {
        admin: true,
        maintain: true,
        push: true,
        triage: true,
        pull: true,
      },
    },
    {
      id: 413768888,
      node_id: "R_kgDOGKmcuA",
      name: "portfolio",
      full_name: "yty0643/portfolio",
      private: false,
      owner: {
        login: "yty0643",
        id: 80657819,
        node_id: "MDQ6VXNlcjgwNjU3ODE5",
        avatar_url: "https://avatars.githubusercontent.com/u/80657819?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yty0643",
        html_url: "https://github.com/yty0643",
        followers_url: "https://api.github.com/users/yty0643/followers",
        following_url:
          "https://api.github.com/users/yty0643/following{/other_user}",
        gists_url: "https://api.github.com/users/yty0643/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yty0643/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yty0643/subscriptions",
        organizations_url: "https://api.github.com/users/yty0643/orgs",
        repos_url: "https://api.github.com/users/yty0643/repos",
        events_url: "https://api.github.com/users/yty0643/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yty0643/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/yty0643/portfolio",
      description: "c0r0lla's portfolio",
      fork: false,
      url: "https://api.github.com/repos/yty0643/portfolio",
      forks_url: "https://api.github.com/repos/yty0643/portfolio/forks",
      keys_url: "https://api.github.com/repos/yty0643/portfolio/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/yty0643/portfolio/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/yty0643/portfolio/teams",
      hooks_url: "https://api.github.com/repos/yty0643/portfolio/hooks",
      issue_events_url:
        "https://api.github.com/repos/yty0643/portfolio/issues/events{/number}",
      events_url: "https://api.github.com/repos/yty0643/portfolio/events",
      assignees_url:
        "https://api.github.com/repos/yty0643/portfolio/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/yty0643/portfolio/branches{/branch}",
      tags_url: "https://api.github.com/repos/yty0643/portfolio/tags",
      blobs_url:
        "https://api.github.com/repos/yty0643/portfolio/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/yty0643/portfolio/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/yty0643/portfolio/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/yty0643/portfolio/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/yty0643/portfolio/statuses/{sha}",
      languages_url: "https://api.github.com/repos/yty0643/portfolio/languages",
      stargazers_url:
        "https://api.github.com/repos/yty0643/portfolio/stargazers",
      contributors_url:
        "https://api.github.com/repos/yty0643/portfolio/contributors",
      subscribers_url:
        "https://api.github.com/repos/yty0643/portfolio/subscribers",
      subscription_url:
        "https://api.github.com/repos/yty0643/portfolio/subscription",
      commits_url:
        "https://api.github.com/repos/yty0643/portfolio/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/yty0643/portfolio/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/yty0643/portfolio/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/yty0643/portfolio/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/yty0643/portfolio/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/yty0643/portfolio/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/yty0643/portfolio/merges",
      archive_url:
        "https://api.github.com/repos/yty0643/portfolio/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/yty0643/portfolio/downloads",
      issues_url:
        "https://api.github.com/repos/yty0643/portfolio/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/yty0643/portfolio/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/yty0643/portfolio/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/yty0643/portfolio/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/yty0643/portfolio/labels{/name}",
      releases_url:
        "https://api.github.com/repos/yty0643/portfolio/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/yty0643/portfolio/deployments",
      created_at: "2021-10-05T10:22:22Z",
      updated_at: "2021-12-03T05:57:13Z",
      pushed_at: "2021-12-03T05:57:10Z",
      git_url: "git://github.com/yty0643/portfolio.git",
      ssh_url: "git@github.com:yty0643/portfolio.git",
      clone_url: "https://github.com/yty0643/portfolio.git",
      svn_url: "https://github.com/yty0643/portfolio",
      homepage: null,
      size: 3467,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
      permissions: {
        admin: true,
        maintain: true,
        push: true,
        triage: true,
        pull: true,
      },
    },
    {
      id: 447500004,
      node_id: "R_kgDOGqxO5A",
      name: "YouTube",
      full_name: "yty0643/YouTube",
      private: true,
      owner: {
        login: "yty0643",
        id: 80657819,
        node_id: "MDQ6VXNlcjgwNjU3ODE5",
        avatar_url: "https://avatars.githubusercontent.com/u/80657819?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yty0643",
        html_url: "https://github.com/yty0643",
        followers_url: "https://api.github.com/users/yty0643/followers",
        following_url:
          "https://api.github.com/users/yty0643/following{/other_user}",
        gists_url: "https://api.github.com/users/yty0643/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yty0643/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yty0643/subscriptions",
        organizations_url: "https://api.github.com/users/yty0643/orgs",
        repos_url: "https://api.github.com/users/yty0643/repos",
        events_url: "https://api.github.com/users/yty0643/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yty0643/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/yty0643/YouTube",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/yty0643/YouTube",
      forks_url: "https://api.github.com/repos/yty0643/YouTube/forks",
      keys_url: "https://api.github.com/repos/yty0643/YouTube/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/yty0643/YouTube/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/yty0643/YouTube/teams",
      hooks_url: "https://api.github.com/repos/yty0643/YouTube/hooks",
      issue_events_url:
        "https://api.github.com/repos/yty0643/YouTube/issues/events{/number}",
      events_url: "https://api.github.com/repos/yty0643/YouTube/events",
      assignees_url:
        "https://api.github.com/repos/yty0643/YouTube/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/yty0643/YouTube/branches{/branch}",
      tags_url: "https://api.github.com/repos/yty0643/YouTube/tags",
      blobs_url: "https://api.github.com/repos/yty0643/YouTube/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/yty0643/YouTube/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/yty0643/YouTube/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/yty0643/YouTube/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/yty0643/YouTube/statuses/{sha}",
      languages_url: "https://api.github.com/repos/yty0643/YouTube/languages",
      stargazers_url: "https://api.github.com/repos/yty0643/YouTube/stargazers",
      contributors_url:
        "https://api.github.com/repos/yty0643/YouTube/contributors",
      subscribers_url:
        "https://api.github.com/repos/yty0643/YouTube/subscribers",
      subscription_url:
        "https://api.github.com/repos/yty0643/YouTube/subscription",
      commits_url: "https://api.github.com/repos/yty0643/YouTube/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/yty0643/YouTube/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/yty0643/YouTube/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/yty0643/YouTube/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/yty0643/YouTube/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/yty0643/YouTube/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/yty0643/YouTube/merges",
      archive_url:
        "https://api.github.com/repos/yty0643/YouTube/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/yty0643/YouTube/downloads",
      issues_url:
        "https://api.github.com/repos/yty0643/YouTube/issues{/number}",
      pulls_url: "https://api.github.com/repos/yty0643/YouTube/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/yty0643/YouTube/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/yty0643/YouTube/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/yty0643/YouTube/labels{/name}",
      releases_url:
        "https://api.github.com/repos/yty0643/YouTube/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/yty0643/YouTube/deployments",
      created_at: "2022-01-13T07:12:24Z",
      updated_at: "2022-01-13T07:13:33Z",
      pushed_at: "2022-01-13T07:13:30Z",
      git_url: "git://github.com/yty0643/YouTube.git",
      ssh_url: "git@github.com:yty0643/YouTube.git",
      clone_url: "https://github.com/yty0643/YouTube.git",
      svn_url: "https://github.com/yty0643/YouTube",
      homepage: null,
      size: 208,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "private",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
      permissions: {
        admin: true,
        maintain: true,
        push: true,
        triage: true,
        pull: true,
      },
    },
  ]);

  const signOut = () => {
    authService.signOut();
    setUser();
    navigate("/");
  };

  useEffect(() => {
    // githubService
    //   .list()
    //   .then((response) => response.json())
    //   .then((res) => {
    //     setRepoitories(res);
    //   });
  }, []);

  return (
    <div>
      <Navbar user={user} signOut={signOut} />
      <Header />
      <RepoList list={repositories} />
    </div>
  );
};

export default Main;
