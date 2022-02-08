#include <iostream>
using namespace std;

int binarySearch(int arr[], int length, int key)
{
    int left = 0;
    int right = length - 1;
    int mid;

    while (left <= right)
    {
        mid = (left + right) / 2;
        if (arr[mid] == key)
        {
            return mid;
        }
        if (arr[mid] > key)
        {
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }
    return -1;
}

int binarySearchRecursive(int arr[], int left, int right, int key)
{
    if (left <= right)
    {
        int mid = (left + right) / 2;
        
        if (arr[mid] == key)
        {
            return mid;
        }
        if (arr[mid] > key)
        {
            return binarySearchRecursive(arr, left, mid - 1, key);
        }
        else
        {
            return binarySearchRecursive(arr, mid + 1, right, key);
        }
    }

    return -1;
}

int main()
{
    int arr[] = {21, 35, 48, 56, 71, 84, 95};
    int length = 7;
    int key = 84;
    int left = 0;
    int right = length - 1;
    // int result = binarySearch(arr, length, key);
    int result = binarySearchRecursive(arr, left, right, key);
    cout << "The " << key << " Found in index " << result << endl;
    return 0;
}