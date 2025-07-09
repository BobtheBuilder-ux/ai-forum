'use client';

import { useState } from 'react';

const forumTopics = [
	{
		id: 1,
		title: 'Getting Started with AI Development',
		author: 'Sarah Chen',
		replies: 23,
		views: 1204,
		lastUpdate: '2h ago',
		tags: ['beginners', 'AI', 'development'],
	},
	{
		id: 2,
		title: 'Best Practices for Model Training',
		author: 'James Wilson',
		replies: 45,
		views: 2308,
		lastUpdate: '5h ago',
		tags: ['machine learning', 'training', 'best practices'],
	},
	// Add more mock topics as needed
];

export default function ForumPage() {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<main className="min-h-screen bg-[#0a0a14] py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center mb-8">
					<h1 className="text-3xl font-bold text-white mb-4 md:mb-0">
						AI Forum Discussions
					</h1>
					<div className="w-full md:w-auto flex space-x-4">
						<input
							type="text"
							placeholder="Search discussions..."
							className="px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-64"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<button className="px-6 py-2 bg-gradient-to-tr from-purple-400 to-pink-400 text-black font-semibold rounded-lg hover:brightness-110 transition">
							New Topic
						</button>
					</div>
				</div>

				<div className="bg-card/30 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
					{forumTopics.map((topic) => (
						<div
							key={topic.id}
							className="p-6 border-b border-white/10 hover:bg-white/5 transition"
						>
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-white hover:text-purple-400 transition">
										<a href={`/forum/topic/${topic.id}`}>{topic.title}</a>
									</h3>
									<div className="mt-2 flex items-center space-x-4 text-sm text-gray-400">
										<span>By {topic.author}</span>
										<span>•</span>
										<span>{topic.lastUpdate}</span>
									</div>
									<div className="mt-3 flex flex-wrap gap-2">
										{topic.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
								<div className="flex flex-col items-end space-y-1 text-sm text-gray-400">
									<div>{topic.replies} replies</div>
									<div>{topic.views} views</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}