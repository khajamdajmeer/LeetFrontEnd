import React, { useState } from 'react';

const List = () => {

   


const ProblemList = [
        {
          "name": "String to Integer (atoi)",
          "percentage": 16.8,
          "difficulty": "Medium"
        },
        {
          "name": "Wildcard Matching",
          "percentage": 27.3,
          "difficulty": "Hard"
        },
        {
          "name": "Reverse Integer",
          "percentage": 27.9,
          "difficulty": "Medium"
        },
        {
          "name": "Regular Expression Matching",
          "percentage": 27.9,
          "difficulty": "Hard"
        },
        {
          "name": "Reverse Nodes in k-Group",
          "percentage": 33.3,
          "difficulty": "Hard"
        },
        {
          "name": "Longest Substring Without Repeating Characters",
          "percentage": 34.1,
          "difficulty": "Medium"
        },
        {
          "name": "Median of Two Sorted Arrays",
          "percentage": 38.2,
          "difficulty": "Hard"
        },
        {
          "name": "Two Sum",
          "percentage": 50.9,
          "difficulty": "Easy"
        },
        {
          "name": "3Sum",
          "percentage": 33.4,
          "difficulty": "Medium"
        },
        {
          "name": "First Missing Positive",
          "percentage": 37.2,
          "difficulty": "Hard"
        },
        {
          "name": "Search in Rotated Sorted Array",
          "percentage": 40.0,
          "difficulty": "Medium"
        },
        {
          "name": "Next Permutation",
          "percentage": 38.7,
          "difficulty": "Medium"
        },
        {
          "name": "Longest Palindromic Substring",
          "percentage": 32.8,
          "difficulty": "Medium"
        },
        {
          "name": "Longest Common Prefix",
          "percentage": 41.7,
          "difficulty": "Easy"
        },
        {
          "name": "Valid Parentheses",
          "percentage": 40.2,
          "difficulty": "Easy"
        },
        {
          "name": "Merge Two Sorted Lists",
          "percentage": 63.3,
          "difficulty": "Easy"
        },
        {
          "name": "Palindrome Number",
          "percentage": 54.6,
          "difficulty": "Easy"
        },
        {
          "name": "Container With Most Water",
          "percentage": 54.2,
          "difficulty": "Medium"
        },
        {
          "name": "3Sum Closest",
          "percentage": 45.5,
          "difficulty": "Medium"
        },
        {
          "name": "Combination Sum",
          "percentage": 70.1,
          "difficulty": "Medium"
        },
        {
          "name": "Generate Parentheses",
          "percentage": 73.5,
          "difficulty": "Medium"
        },
        {
          "name": "Combination Sum II",
          "percentage": 53.8,
          "difficulty": "Medium"
        },
        {
          "name": "Search Insert Position",
          "percentage": 44.6,
          "difficulty": "Easy"
        },
        {
          "name": "Find First and Last Position of Element in Sorted Array",
          "percentage": 43.4,
          "difficulty": "Medium"
        },
        {
          "name": "Jump Game II",
          "percentage": 40.2,
          "difficulty": "Medium"
        },
        {
          "name": "Merge k Sorted Lists",
          "percentage": 51.1,
          "difficulty": "Hard"
        },
        {
          "name": "Remove Nth Node From End of List",
          "percentage": 42.8,
          "difficulty": "Medium"
        },
        {
          "name": "Substring with Concatenation of All Words",
          "percentage": 31.6,
          "difficulty": "Hard"
        },
        {
          "name": "Find the Index of the First Occurrence in a String",
          "percentage": 40.7,
          "difficulty": "Easy"
        },
        {
          "name": "Count and Say",
          "percentage": 53.4,
          "difficulty": "Medium"
        },
        {
          "name": "Combination Sum II",
          "percentage": 53.8,
          "difficulty": "Medium"
        },
        {
          "name": "Find First and Last Position of Element in Sorted Array",
          "percentage": 43.4,
          "difficulty": "Medium"
        },
        {
          "name": "Remove Element",
          "percentage": 54.9,
          "difficulty": "Easy"
        },
        {
          "name": "Remove Duplicates from Sorted Array",
          "percentage": 53.4,
          "difficulty": "Easy"
        },
        {
          "name": "Permutations II",
          "percentage": 58.1,
          "difficulty": "Medium"
        },
        {
          "name": "3Sum",
          "percentage": 33.4,
          "difficulty": "Medium"
        },
        {
          "name": "Multiply Strings",
          "percentage": 39.6,
          "difficulty": "Medium"
        },
        {
          "name": "Letter Combinations of a Phone Number",
          "percentage": 58.8,
          "difficulty": "Medium"
        },
        {
          "name": "Sudoku Solver",
          "percentage": 59.4,
          "difficulty": "Hard"
        },
        {
          "name": "Sudoku Solver",
          "percentage": 59.4,
          "difficulty": "Hard"
        },
        {
          "name": "Permutations",
          "percentage": 77.3,
          "difficulty": "Medium"
        },
        {
          "name": "Rotate Image",
          "percentage": 72.8,
          "difficulty": "Medium"
        },
        {
          "name": "Group Anagrams",
          "percentage": 67.1,
          "difficulty": "Medium"
        },
        {
          "name": "Generate Parentheses",
          "percentage": 73.5,
          "difficulty": "Medium"
        },
        {
          "name": "Zigzag Conversion",
          "percentage": 46.1,
          "difficulty": "Medium"
        },
        {
            "name": "String to Integer (atoi)",
            "percentage": 16.8,
            "difficulty": "Medium"
          },
          {
            "name": "Wildcard Matching",
            "percentage": 27.3,
            "difficulty": "Hard"
          },
          {
            "name": "Reverse Integer",
            "percentage": 27.9,
            "difficulty": "Medium"
          },
          {
            "name": "Regular Expression Matching",
            "percentage": 27.9,
            "difficulty": "Hard"
          },
          {
            "name": "Reverse Nodes in k-Group",
            "percentage": 33.3,
            "difficulty": "Hard"
          },
          {
            "name": "Longest Substring Without Repeating Characters",
            "percentage": 34.1,
            "difficulty": "Medium"
          },
          {
            "name": "Median of Two Sorted Arrays",
            "percentage": 38.2,
            "difficulty": "Hard"
          },
          {
            "name": "Two Sum",
            "percentage": 50.9,
            "difficulty": "Easy"
          }, {
            "name": "Find First and Last Position of Element in Sorted Array",
            "percentage": 43.4,
            "difficulty": "Medium"
          },
          {
            "name": "Jump Game II",
            "percentage": 40.2,
            "difficulty": "Medium"
          },
          {
            "name": "Merge k Sorted Lists",
            "percentage": 51.1,
            "difficulty": "Hard"
          },
          {
            "name": "Remove Nth Node From End of List",
            "percentage": 42.8,
            "difficulty": "Medium"
          },
          {
            "name": "Substring with Concatenation of All Words",
            "percentage": 31.6,
            "difficulty": "Hard"
          },
          {
            "name": "Find the Index of the First Occurrence in a String",
            "percentage": 40.7,
            "difficulty": "Easy"
          },
          {
            "name": "Count and Say",
            "percentage": 53.4,
            "difficulty": "Medium"
          },
          {
            "name": "Combination Sum II",
            "percentage": 53.8,
            "difficulty": "Medium"
          },
          {
            "name": "Find First and Last Position of Element in Sorted Array",
            "percentage": 43.4,
            "difficulty": "Medium"
          },
          {
            "name": "Remove Element",
            "percentage": 54.9,
            "difficulty": "Easy"
          },
          {
            "name": "Remove Duplicates from Sorted Array",
            "percentage": 53.4,
            "difficulty": "Easy"
          },
          {
            "name": "3Sum",
            "percentage": 33.4,
            "difficulty": "Medium"
          },
          {
            "name": "First Missing Positive",
            "percentage": 37.2,
            "difficulty": "Hard"
          },
          {
            "name": "Search in Rotated Sorted Array",
            "percentage": 40.0,
            "difficulty": "Medium"
          },
          {
            "name": "Next Permutation",
            "percentage": 38.7,
            "difficulty": "Medium"
          },
          {
            "name": "Longest Palindromic Substring",
            "percentage": 32.8,
            "difficulty": "Medium"
          },
          {
            "name": "Longest Common Prefix",
            "percentage": 41.7,
            "difficulty": "Easy"
          },
          {
            "name": "Valid Parentheses",
            "percentage": 40.2,
            "difficulty": "Easy"
          },
          {
            "name": "Merge Two Sorted Lists",
            "percentage": 63.3,
            "difficulty": "Easy"
          },
          {
            "name": "Palindrome Number",
            "percentage": 54.6,
            "difficulty": "Easy"
          },
          {
            "name": "Container With Most Water",
            "percentage": 54.2,
            "difficulty": "Medium"
          },
          {
            "name": "3Sum Closest",
            "percentage": 45.5,
            "difficulty": "Medium"
          },
          {
            "name": "Combination Sum",
            "percentage": 70.1,
            "difficulty": "Medium"
          },
          {
            "name": "Generate Parentheses",
            "percentage": 73.5,
            "difficulty": "Medium"
          },
          {
            "name": "Combination Sum II",
            "percentage": 53.8,
            "difficulty": "Medium"
          },
          {
            "name": "Search Insert Position",
            "percentage": 44.6,
            "difficulty": "Easy"
          },
          {
            "name": "Find First and Last Position of Element in Sorted Array",
            "percentage": 43.4,
            "difficulty": "Medium"
          },
          {
            "name": "Jump Game II",
            "percentage": 40.2,
            "difficulty": "Medium"
          },
          {
            "name": "Merge k Sorted Lists",
            "percentage": 51.1,
            "difficulty": "Hard"
          },
          {
            "name": "Remove Nth Node From End of List",
            "percentage": 42.8,
            "difficulty": "Medium"
          },
          {
            "name": "Substring with Concatenation of All Words",
            "percentage": 31.6,
            "difficulty": "Hard"
          },
          {
            "name": "Find the Index of the First Occurrence in a String",
            "percentage": 40.7,
            "difficulty": "Easy"
          },
          {
            "name": "Count and Say",
            "percentage": 53.4,
            "difficulty": "Medium"
          },
          {
            "name": "Combination Sum II",
            "percentage": 53.8,
            "difficulty": "Medium"
          },
          {
            "name": "Find First and Last Position of Element in Sorted Array",
            "percentage": 43.4,
            "difficulty": "Medium"
          },
          {
            "name": "Remove Element",
            "percentage": 54.9,
            "difficulty": "Easy"
          },
          {
            "name": "Remove Duplicates from Sorted Array",
            "percentage": 53.4,
            "difficulty": "Easy"
          },
            {
              "name": "String to Integer (atoi)",
              "percentage": 16.8,
              "difficulty": "Medium"
            },
            {
              "name": "Wildcard Matching",
              "percentage": 27.3,
              "difficulty": "Hard"
            },
            {
              "name": "Reverse Integer",
              "percentage": 27.9,
              "difficulty": "Medium"
            },
            {
              "name": "Regular Expression Matching",
              "percentage": 27.9,
              "difficulty": "Hard"
            },
            {
              "name": "Reverse Nodes in k-Group",
              "percentage": 33.3,
              "difficulty": "Hard"
            },
            {
              "name": "Longest Substring Without Repeating Characters",
              "percentage": 34.1,
              "difficulty": "Medium"
            },
            {
              "name": "Median of Two Sorted Arrays",
              "percentage": 38.2,
              "difficulty": "Hard"
            },
            {
              "name": "Two Sum",
              "percentage": 50.9,
              "difficulty": "Easy"
            },
            {
              "name": "3Sum",
              "percentage": 33.4,
              "difficulty": "Medium"
            },
            {
              "name": "First Missing Positive",
              "percentage": 37.2,
              "difficulty": "Hard"
            },
            {
              "name": "Search in Rotated Sorted Array",
              "percentage": 40.0,
              "difficulty": "Medium"
            },
            {
              "name": "Next Permutation",
              "percentage": 38.7,
              "difficulty": "Medium"
            },
            {
              "name": "Longest Palindromic Substring",
              "percentage": 32.8,
              "difficulty": "Medium"
            },
            {
              "name": "Longest Common Prefix",
              "percentage": 41.7,
              "difficulty": "Easy"
            },
            {
              "name": "Valid Parentheses",
              "percentage": 40.2,
              "difficulty": "Easy"
            },
            {
              "name": "Merge Two Sorted Lists",
              "percentage": 63.3,
              "difficulty": "Easy"
            },
            {
              "name": "Palindrome Number",
              "percentage": 54.6,
              "difficulty": "Easy"
            },
            {
              "name": "Container With Most Water",
              "percentage": 54.2,
              "difficulty": "Medium"
            },
            {
              "name": "3Sum Closest",
              "percentage": 45.5,
              "difficulty": "Medium"
            },
            {
              "name": "Combination Sum",
              "percentage": 70.1,
              "difficulty": "Medium"
            },
            {
              "name": "Generate Parentheses",
              "percentage": 73.5,
              "difficulty": "Medium"
            },
            {
              "name": "Combination Sum II",
              "percentage": 53.8,
              "difficulty": "Medium"
            },
            {
              "name": "Search Insert Position",
              "percentage": 44.6,
              "difficulty": "Easy"
            },
            {
              "name": "Find First and Last Position of Element in Sorted Array",
              "percentage": 43.4,
              "difficulty": "Medium"
            },
            {
              "name": "Jump Game II",
              "percentage": 40.2,
              "difficulty": "Medium"
            },
            {
              "name": "Merge k Sorted Lists",
              "percentage": 51.1,
              "difficulty": "Hard"
            },
            {
              "name": "Remove Nth Node From End of List",
              "percentage": 42.8,
              "difficulty": "Medium"
            },
            {
              "name": "Substring with Concatenation of All Words",
              "percentage": 31.6,
              "difficulty": "Hard"
            },
            {
              "name": "Find the Index of the First Occurrence in a String",
              "percentage": 40.7,
              "difficulty": "Easy"
            },
            {
              "name": "Count and Say",
              "percentage": 53.4,
              "difficulty": "Medium"
            },
            {
              "name": "Combination Sum II",
              "percentage": 53.8,
              "difficulty": "Medium"
            },
            {
              "name": "Find First and Last Position of Element in Sorted Array",
              "percentage": 43.4,
              "difficulty": "Medium"
            },
            {
              "name": "Remove Element",
              "percentage": 54.9,
              "difficulty": "Easy"
            },
            {
              "name": "Remove Duplicates from Sorted Array",
              "percentage": 53.4,
              "difficulty": "Easy"
            },
            {
              "name": "Permutations II",
              "percentage": 58.1,
              "difficulty": "Medium"
            },
            {
              "name": "Multiply Strings",
              "percentage": 39.6,
              "difficulty": "Medium"
            },
            {
              "name": "Letter Combinations of a Phone Number",
              "percentage": 58.8,
              "difficulty": "Medium"
            },
            {
              "name": "Sudoku Solver",
              "percentage": 59.4,
              "difficulty": "Hard"
            },
            {
              "name": "Sudoku Solver",
              "percentage": 59.4,
              "difficulty": "Hard"
            },
            {
              "name": "Permutations",
              "percentage": 77.3,
              "difficulty": "Medium"
            },
            {
              "name": "Rotate Image",
              "percentage": 72.8,
              "difficulty": "Medium"
            },
            {
              "name": "Group Anagrams",
              "percentage": 67.1,
              "difficulty": "Medium"
            },
            {
              "name": "Generate Parentheses",
              "percentage": 73.5,
              "difficulty": "Medium"
            },
            {
              "name": "Zigzag Conversion",
              "percentage": 46.1,
              "difficulty": "Medium"
            },
            {
              "name": "N-Queens",
              "percentage": 66.4,
              "difficulty": "Hard"
            },
            {
              "name": "N-Queens II",
              "percentage": 72.7,
              "difficulty": "Hard"
            },
            {
              "name": "Maximum Subarray",
              "percentage": 50.4,
              "difficulty": "Medium"
            },
            {
              "name": "Spiral Matrix",
              "percentage": 47.8,
              "difficulty": "Medium"
            },
            {
              "name": "Jump Game",
              "percentage": 38.6,
              "difficulty": "Medium"
            },
            {
              "name": "Merge Intervals",
              "percentage": 46.6,
              "difficulty": "Medium"
            },
            {
              "name": "Insert Interval",
              "percentage": 39.5,
              "difficulty": "Medium"
            },
            {
              "name": "Length of Last Word",
              "percentage": 46.6,
              "difficulty": "Easy"
            },
            {
              "name": "Spiral Matrix II",
              "percentage": 70.2,
              "difficulty": "Medium"
            },
            {
              "name": "Permutation Sequence",
              "percentage": 45.7,
              "difficulty": "Hard"
            },
            {
              "name": "Rotate List",
              "percentage": 36.9,
              "difficulty": "Medium"
            },
            {
              "name": "Unique Paths",
              "percentage": 63.7,
              "difficulty": "Medium"
            },
            {
              "name": "Unique Paths II",
              "percentage": 41.0,
              "difficulty": "Medium"
            },
            {
              "name": "Minimum Path Sum",
              "percentage": 63.0,
              "difficulty": "Medium"
            },
            {
              "name": "Valid Number",
              "percentage": 19.0,
              "difficulty": "Hard"
            },
            {
              "name": "Plus One",
              "percentage": 44.3,
              "difficulty": "Easy"
            },
            {
              "name": "Add Binary",
              "percentage": 52.8,
              "difficulty": "Easy"
            },
            {
              "name": "Text Justification",
              "percentage": 41.5,
              "difficulty": "Hard"
            },
            {
              "name": "Sqrt(x)",
              "percentage": 38.0,
              "difficulty": "Easy"
            },
            {
              "name": "Climbing Stairs",
              "percentage": 52.2,
              "difficulty": "Easy"
            },
            {
              "name": "Simplify Path",
              "percentage": 41.1,
              "difficulty": "Medium"
            },
            {
              "name": "Edit Distance",
              "percentage": 55.5,
              "difficulty": "Medium"
            },
            {
              "name": "Set Matrix Zeroes",
              "percentage": 53.7,
              "difficulty": "Medium"
            },
            {
              "name": "Search a 2D Matrix",
              "percentage": 49.3,
              "difficulty": "Medium"
            },
            {
              "name": "Sort Colors",
              "percentage": 60.6,
              "difficulty": "Medium"
            },
            {
              "name": "Minimum Window Substring",
              "percentage": 41.3,
              "difficulty": "Hard"
            },
            {
              "name": "Combinations",
              "percentage": 69.4,
              "difficulty": "Medium"
            },
            {
              "name": "Subsets",
              "percentage": 76.3,
              "difficulty": "Medium"
            },
            {
              "name": "Word Search",
              "percentage": 40.8,
              "difficulty": "Medium"
            },
            {
              "name": "Remove Duplicates from Sorted Array II",
              "percentage": 55.4,
              "difficulty": "Medium"
            },
            {
              "name": "Search in Rotated Sorted Array II",
              "percentage": 37.3,
              "difficulty": "Medium"
            },
            {
              "name": "Remove Duplicates from Sorted List II",
              "percentage": 46.6,
              "difficulty": "Medium"
            },
            {
              "name": "Remove Duplicates from Sorted List",
              "percentage": 51.6,
              "difficulty": "Easy"
            },
            {
              "name": "Largest Rectangle in Histogram",
              "percentage": 43.4,
              "difficulty": "Hard"
            },
            {
              "name": "Maximal Rectangle",
              "percentage": 46.0,
              "difficulty": "Hard"
            },
            {
              "name": "Partition List",
              "percentage": 55.2,
              "difficulty": "Medium"
            },
            {
              "name": "Scramble String",
              "percentage": 39.3,
              "difficulty": "Hard"
            },
            {
              "name": "Merge Sorted Array",
              "percentage": 48.1,
              "difficulty": "Easy"
            },
            {
              "name": "Gray Code",
              "percentage": 58.1,
              "difficulty": "Medium"
            },
            {
              "name": "Subsets II",
              "percentage": 56.6,
              "difficulty": "Medium"
            },
            {
              "name": "Decode Ways",
              "percentage": 33.4,
              "difficulty": "Medium"
            },
            {
              "name": "Reverse Linked List II",
              "percentage": 47.2,
              "difficulty": "Medium"
            },
            {
              "name": "Restore IP Addresses",
              "percentage": 48.6,
              "difficulty": "Medium"
            },
            {
              "name": "Binary Tree Inorder Traversal",
              "percentage": 74.8,
              "difficulty": "Easy"
            },
            {
              "name": "Unique Binary Search Trees II",
              "percentage": 56.5,
              "difficulty": "Medium"
            },
            {
              "name": "Unique Binary Search Trees",
              "percentage": 60.5,
              "difficulty": "Medium"
            },
            {
              "name": "Interleaving String",
              "percentage": 39.3,
              "difficulty": "Medium"
            },
            {
              "name": "Validate Binary Search Tree",
              "percentage": 32.4,
              "difficulty": "Medium"
            },
            {
              "name": "Recover Binary Search Tree",
              "percentage": 52.1,
              "difficulty": "Medium"
            },
            {
              "name": "Same Tree",
              "percentage": 59.8,
              "difficulty": "Easy"
            },
            {
              "name": "Symmetric Tree",
              "percentage": 55.4,
              "difficulty": "Easy"
            },
            {
              "name": "Binary Tree Level Order Traversal",
              "percentage": 65.9,
              "difficulty": "Medium"
            },
            {
              "name": "Binary Tree Zigzag Level Order Traversal",
              "percentage": 58.0,
              "difficulty": "Medium"
            },
            {
              "name": "Maximum Depth of Binary Tree",
              "percentage": 74.6,
              "difficulty": "Easy"
            },
            {
              "name": "Construct Binary Tree from Preorder and Inorder Traversal",
              "percentage": 62.7,
              "difficulty": "Medium"
            },
            {
              "name": "Construct Binary Tree from Inorder and Postorder Traversal",
              "percentage": 61.4,
              "difficulty": "Medium"
            },
            {
              "name": "Binary Tree Level Order Traversal II",
              "percentage": 62.3,
              "difficulty": "Medium"
            },
            {
              "name": "Convert Sorted Array to Binary Search Tree",
              "percentage": 70.8,
              "difficulty": "Easy"
            },
            {
              "name": "Convert Sorted List to Binary Search Tree",
              "percentage": 61.0,
              "difficulty": "Medium"
            },
            {
              "name": "Balanced Binary Tree",
              "percentage": 50.6,
              "difficulty": "Easy"
            },
            {
              "name": "Minimum Depth of Binary Tree",
              "percentage": 46.7,
              "difficulty": "Easy"
            },
            {
              "name": "Path Sum",
              "percentage": 49.2,
              "difficulty": "Easy"
            },
            {
              "name": "Path Sum II",
              "percentage": 57.7,
              "difficulty": "Medium"
            },
            {
              "name": "Flatten Binary Tree to Linked List",
              "percentage": 63.4,
              "difficulty": "Medium"
            },
            {
              "name": "Distinct Subsequences",
              "percentage": 45.5,
              "difficulty": "Hard"
            },
            {
              "name": "Populating Next Right Pointers in Each Node",
              "percentage": 61.6,
              "difficulty": "Medium"
            },
            {
              "name": "Populating Next Right Pointers in Each Node II",
              "percentage": 51.3,
              "difficulty": "Medium"
            },
            {
              "name": "Pascal's Triangle",
              "percentage": 73.1,
              "difficulty": "Easy"
            },
            {
              "name": "Pascal's Triangle II",
              "percentage": 63.2,
              "difficulty": "Easy"
            },
            {
              "name": "Triangle",
              "percentage": 55.7,
              "difficulty": "Medium"
            },
            {
              "name": "Best Time to Buy and Sell Stock",
              "percentage": 53.5,
              "difficulty": "Easy"
            },
            {
              "name": "Best Time to Buy and Sell Stock II",
              "percentage": 65.2,
              "difficulty": "Medium"
            },
            {
              "name": "Best Time to Buy and Sell Stock III",
              "percentage": 46.9,
              "difficulty": "Hard"
            },
            {
              "name": "Binary Tree Maximum Path Sum",
              "percentage": 39.6,
              "difficulty": "Hard"
            },
            {
              "name": "Valid Palindrome",
              "percentage": 45.9,
              "difficulty": "Easy"
            },
            {
              "name": "Word Ladder II",
              "percentage": 27.3,
              "difficulty": "Hard"
            },
            {
              "name": "Word Ladder",
              "percentage": 38.1,
              "difficulty": "Hard"
            },
            {
              "name": "Longest Consecutive Sequence",
              "percentage": 47.4,
              "difficulty": "Medium"
            },
            {
              "name": "Sum Root to Leaf Numbers",
              "percentage": 62.2,
              "difficulty": "Medium"
            },
            {
              "name": "Surrounded Regions",
              "percentage": 38.2,
              "difficulty": "Medium"
            },
            {
              "name": "Palindrome Partitioning",
              "percentage": 66.3,
              "difficulty": "Medium"
            },
            {
              "name": "Palindrome Partitioning II",
              "percentage": 33.6,
              "difficulty": "Hard"
            },
            {
              "name": "Clone Graph",
              "percentage": 55.1,
              "difficulty": "Medium"
            },
            {
              "name": "Gas Station",
              "percentage": 45.8,
              "difficulty": "Medium"
            },
            {
              "name": "Candy",
              "percentage": 43.3,
              "difficulty": "Hard"
            },
            {
              "name": "Single Number",
              "percentage": 71.7,
              "difficulty": "Easy"
            },
            {
              "name": "Single Number II",
              "percentage": 61.7,
              "difficulty": "Medium"
            },
            {
              "name": "Copy List with Random Pointer",
              "percentage": 54.3,
              "difficulty": "Medium"
            },
            {
              "name": "Word Break",
              "percentage": 46.3,
              "difficulty": "Medium"
            },
            {
              "name": "Word Break II",
              "percentage": 46.5,
              "difficulty": "Hard"
            },
            {
              "name": "Linked List Cycle",
              "percentage": 48.9,
              "difficulty": "Easy"
            },
            {
              "name": "Linked List Cycle II",
              "percentage": 50.1,
              "difficulty": "Medium"
            },
            {
              "name": "Reorder List",
              "percentage": 54.7,
              "difficulty": "Medium"
            },
            {
              "name": "Binary Tree Preorder Traversal",
              "percentage": 68.3,
              "difficulty": "Easy"
            },
            {
              "name": "Binary Tree Postorder Traversal",
              "percentage": 69.6,
              "difficulty": "Easy"
            },
            {
              "name": "LRU Cache",
              "percentage": 41.7,
              "difficulty": "Medium"
            },
            {
              "name": "Insertion Sort List",
              "percentage": 52.2,
              "difficulty": "Medium"
            },
            {
              "name": "Sort List",
              "percentage": 56.5,
              "difficulty": "Medium"
            },
            {
              "name": "Max Points on a Line",
              "percentage": 25.9,
              "difficulty": "Hard"
            },
            {
              "name": "Evaluate Reverse Polish Notation",
              "percentage": 47.8,
              "difficulty": "Medium"
            }
          
          




    ]


    const pagedataSize = 25;
    const [startindex,setStartindex]=useState(0);
    const [endindex,setEndindex]=useState(pagedataSize);

    const handlenext=()=>{
        if(endindex+pagedataSize>ProblemList.length){
            if(endindex===ProblemList.length){

            }else{
                setStartindex(endindex);
                setEndindex(ProblemList.length);
            }
        }
        else{
            setStartindex(endindex);
            setEndindex(endindex+pagedataSize);
        }
    }
    const hanldePrev=()=>{
        if(startindex-pagedataSize<=0){
            if(startindex!==0){

                setEndindex(startindex);
                setStartindex(0);
            }
        }
        else{
            setEndindex(startindex);
            setStartindex(startindex-pagedataSize)
        }
    }

    const handlePageBtn=(start)=>{
        if(start>startindex){
            if(start+pagedataSize>ProblemList.length){
                if(endindex===ProblemList.length){
    
                }else{
                    setStartindex(start);
                    setEndindex(ProblemList.length);
                }
            }
            else{
                setStartindex(start);
                setEndindex(start+pagedataSize);
            }
        }
        else{
            if(start-pagedataSize<=0){
                if(startindex!==0){
    
                    setEndindex(start+pagedataSize);
                    setStartindex(0);
                }
            }
            else{
                setEndindex(start+pagedataSize);
                setStartindex(start)
            }
        }
    }


  return (
    <>
      <div className="position-relative" style={{Width:'700px',overflowX:'auto',maxHeight:'1000px',overflowY:'auto'}}>
        <div className='position-sticky top-0' style={{backgroundColor:'#ffff'}}>

        <div className="d-flex  justify-content-between py-2">
            <select className='px-4 border rounded bg-light text-secondary mx-2' name="aka" id="">
                <option value="">List</option>
            </select>
            <select className='px-4 border rounded bg-light text-secondary mx-2' name="aka" id="">
                <option value="">Difficulty</option>
            </select>
            <select className='px-4 border rounded bg-light text-secondary mx-2' name="aka" id="">
                <option value="">Status</option>
            </select>
            <select className='px-4 border rounded bg-light text-secondary mx-2' name="aka" id="">
                <option value="">Tags</option>
            </select>
            <input type="text" className='border rounded px-2 mx-2' placeholder='Search' aria-label='search'/>
            <button className="btn btn-primary mx-2">search</button>
            <button className="btn btn-secondary mx-2 d-flex flex-nowrap">
            <span class="material-symbols-outlined ">
shuffle
</span> <span>PickOne</span>
            </button>
        </div>
        <div className="d-flex py-2  text-secondary border-bottom">
            <div className="w-50 d-flex">
                <div className="w-25">Status</div>
                <div className="w-75">Title</div>
            </div>
            <div className="w-50 d-flex  justify-content-between">
            <div className="w-25">Solution</div>
                <div className="w-25">Acceptance</div>
                <div className="w-25">Difficulty</div>
                <div className="w-25">Frequency</div>
            </div>
        </div>
        </div>

        {ProblemList.slice(startindex,endindex).map((ele,index)=>{
            return(
<div className="d-flex py-2 text-capitalize  ">
            <div className="w-50 d-flex">
                <div className="w-25"><span class="material-symbols-outlined" style={{color:'orange'}}>
lock
</span></div>
                <div className="w-75 " style={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflowX:'hidden'}}>{ele.name}</div>
               
            </div>
            <div className="w-50 d-flex justify-content-between align-items-center">
            <div className="w-25"><span class="material-symbols-outlined text-primary">
description
</span></div>
                <div className="w-25">{ele.percentage}%</div>
                <div className="w-25 " style={{color:`${ele.difficulty==='Hard'?'#9d0208':ele.difficulty==='Medium'?'#fb8500':'#6a994e'}`}}>{ele.difficulty}</div>
                <div className="w-25 "><span class="material-symbols-outlined" style={{color:'grey'}}>
lock
</span></div>
            </div>
        </div>
            )
        })}
        
      </div>

      <div className="container-fluid justify-content-center py-2">
        <div className="container d-flex justify-content-center flex-wrap">
        <button className="btn  mx-2 py-0 d-flex align-items-center justify-content-center p-0" onClick={hanldePrev}>
            <span class="material-symbols-outlined" style={{transform:'rotate(90deg)',color:'grey'}}>
expand_more
</span>
</button>
{ProblemList.map((ele,index)=>{
    return(<>
    
    {index % pagedataSize===0 ?
<button className={` btn border rounded p-1 m-2 ${index===startindex?'bg-light':''}`} onClick={()=>handlePageBtn(index)}>{Math.ceil(index/pagedataSize)+1}</button>
    :''}
    
    </>
    );
})}





            <button className="btn d-flex align-items-center p-0" onClick={handlenext} >
                <span class="material-symbols-outlined" style={{transform:'rotate(-90deg)',color:'grey'}}>
expand_more</span>
</button>
        </div>
      </div>
    </>
  );
}

export default List;
