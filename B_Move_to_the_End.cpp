#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

int main() {
  int t;
  cin >> t;

  while (t--) {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; ++i) {
      cin >> a[i];
    }

    for (int k = 1; k <= n; ++k) {
      long long max_sum = -1;
      for (int i = 0; i < n; ++i) {
        vector<long long> temp_a = a;
        long long val = temp_a[i];
        temp_a.erase(temp_a.begin() + i);
        temp_a.push_back(val);

        long long current_sum = 0;
        for (int j = n - k; j < n; ++j) {
          current_sum += temp_a[j];
        }

        max_sum = max(max_sum, current_sum);
      }
      cout << max_sum << " ";
    }
    cout << endl;
  }

  return 0;
}
