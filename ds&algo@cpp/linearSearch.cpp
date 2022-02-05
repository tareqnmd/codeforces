#include <iostream>
using namespace std;

int linearSearch(int arr[], int length, int key)
{
    for (int i = 0; i < length; i++)
    {
        if (arr[i] == key)
        {
            return i;
        }
    }
    return -1;
}

int main()
{
    int arr[] = {8, 64, 52, 89, 12};
    int length = 4;
    int key = 89;
    int result = linearSearch(arr, length, key);
    cout << "The " << key << " Found in index " << result << endl;
    return 0;
}