
import java.util.HashMap;

class RateLimiter {

    private HashMap<String, Long[]> users;
    private long limit;
    private String strategy;
    private long windowSizeSeconds;

    public RateLimiter(String strategy, int limit, int windowSizeSeconds) {
        this.limit = limit;
        this.strategy = strategy;
        this.windowSizeSeconds = windowSizeSeconds;
        this.users = new HashMap<>();

    }

    public boolean allowRequest(String clientId) {
        // if this user doesnt exist, add him to users hashmap
        Long[] client = this.users.get(clientId);
        if (client == null || client[1] < System.currentTimeMillis()) {
            Long[] timeArr = new Long[] { this.limit - 1, System.currentTimeMillis() + this.windowSizeSeconds * 1000 };

            this.users.put(clientId, timeArr);

            return true;
        }
        if (client[0] > 0) { // Expired time
            Long[] timeArr = new Long[] { (long) (client[0] - 1), client[1] };
            this.users.put(clientId, timeArr);
            return true;
        }
        return false;
    }

    public int getRemainingRequests(String clientId) {
        Long[] client = this.users.get(clientId);
        if (client != null) {
            return client[0].intValue();
        }
        return (int) this.limit;
    }

    public void resetClient(String clientId) {
        Long[] client = this.users.get(clientId);
        if (client != null) {
            client[0] = this.limit;
            client[1] = System.currentTimeMillis() + this.windowSizeSeconds * 1000;
        }
    }

    public static void main(String[] args) {
        int passed = 0;
        int total = 0;

        // Test 1: basic fixed window — allow up to limit
        RateLimiter limiter = new RateLimiter("FIXED_WINDOW", 5, 60);
        passed += check(limiter.allowRequest("user123"), true);
        total++;
        passed += check(limiter.allowRequest("user123"), true);
        total++;
        passed += check(limiter.allowRequest("user123"), true);
        total++;
        passed += check(limiter.allowRequest("user123"), true);
        total++;
        passed += check(limiter.allowRequest("user123"), true);
        total++;
        passed += check(limiter.allowRequest("user123"), false);
        total++; // exceeded

        // Test 2: remaining requests
        passed += check(limiter.getRemainingRequests("user123"), 0);
        total++;

        // Test 3: different clients are independent
        passed += check(limiter.allowRequest("user456"), true);
        total++;
        passed += check(limiter.getRemainingRequests("user456"), 4);
        total++;

        // Test 4: reset client
        limiter.resetClient("user123");
        passed += check(limiter.allowRequest("user123"), true);
        total++;
        passed += check(limiter.getRemainingRequests("user123"), 4);
        total++;

        // Test 5: new client has full limit remaining
        passed += check(limiter.getRemainingRequests("newuser"), 5);
        total++;

        System.out.println("\n" + passed + "/" + total + " tests passed");
    }

    private static int check(boolean result, boolean expected) {
        if (result == expected) {
            System.out.println("PASS: got " + result);
            return 1;
        } else {
            System.out.println("FAIL: got " + result + ", expected " + expected);
            return 0;
        }
    }

    private static int check(int result, int expected) {
        if (result == expected) {
            System.out.println("PASS: got " + result);
            return 1;
        } else {
            System.out.println("FAIL: got " + result + ", expected " + expected);
            return 0;
        }
    }
}
