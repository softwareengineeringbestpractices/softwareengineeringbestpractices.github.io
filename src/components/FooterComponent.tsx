import React, { useState, useEffect } from 'react';
import logo from '../logo.png';

export const FooterComponent: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-700 mt-8 p-6 text-gray-400">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <div className="mb-4 sm:mb-0">
                    <a href="#" className="flex items-center justify-center sm:justify-start">
                        <div className="cursor-pointer flex items-center">
                            <span className="self-center whitespace-nowrap text-2xl font-extrabold text-white">
                                <span className="text-blue-500">SE</span>BP
                            </span>
                        </div>
                        <span className="text-gray-400 ml-4">Software Engineering Best Practices</span>
                    </a>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-medium">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Licensing</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>
            <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center">
                <span className="text-sm text-gray-400 sm:text-left mb-4 sm:mb-0">
                    © 2025 <a href="#" className="hover:underline">SEBP™</a>. All Rights Reserved.
                </span>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl">
                        {/* Simple SVG for Facebook */}
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline-block">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.27 0-3.192 4-3.192 4v2z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl">
                        {/* Simple SVG for Instagram */}
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline-block">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.149-4.771-1.692-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.668.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.668-.072-4.947c-.2-4.354-2.618-6.782-6.979-6.979-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
                        {/* Simple SVG for Twitter */}
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline-block">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.49 2.902-6.49 6.49 0 .509.058 1.007.169 1.487-5.33-.268-10.045-2.83-13.248-6.725-.547.935-.85 2.06-.85 3.253 0 2.254 1.137 4.244 2.873 5.419-.66-.022-1.285-.205-1.829-.53v.08c0 3.154 2.244 5.79 5.218 6.385-.59.162-1.21.21-1.84.21-.453 0-.893-.043-1.315-.124.834 2.592 3.252 4.474 6.133 4.526-2.226 1.754-5.034 2.809-8.09 2.809-.53 0-1.053-.031-1.566-.092 2.89 1.861 6.35 2.949 10.067 2.949 12.071 0 18.67-9.912 18.67-18.67 0-.285-.007-.568-.02-.85.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-300 text-2xl">
                        {/* Simple SVG for Github */}
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline-block">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.701-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.46-1.11-1.46-.909-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.356-1.088.649-1.339-2.226-.253-4.555-1.113-4.555-4.93 0-1.088.389-1.979 1.029-2.675-.103-.253-.446-1.266.098-2.64c0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.865c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.373.202 2.387.099 2.64.64.696 1.028 1.587 1.028 2.675 0 3.826-2.334 4.673-4.566 4.92.359.309.678.92.678 1.855 0 1.339-.012 2.419-.012 2.747 0 .268.179.576.688.48C21.137 20.19 24 16.436 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-pink-600 text-2xl">
                        {/* Simple SVG for Dribbble */}
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline-block">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.701-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.46-1.11-1.46-.909-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.356-1.088.649-1.339-2.226-.253-4.555-1.113-4.555-4.93 0-1.088.389-1.979 1.029-2.675-.103-.253-.446-1.266.098-2.64c0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.865c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.373.202 2.387.099 2.64.64.696 1.028 1.587 1.028 2.675 0 3.826-2.334 4.673-4.566 4.92.359.309.678.92.678 1.855 0 1.339-.012 2.419-.012 2.747 0 .268.179.576.688.48C21.137 20.19 24 16.436 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};